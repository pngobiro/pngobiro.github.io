#!/bin/bash
# ai_agent.sh
# Usage: ./ai_agent.sh "your task description here"
# This is a simple ReAct-style AI agent built in Bash using the Gemini CLI.
# It prompts Gemini to reason step by step, execute Bash actions when needed,
# and loop until a final answer is reached. Assumes 'gemini' CLI is installed and configured.

if [ $# -eq 0 ]; then
    echo "Usage: $0 \"task description\""
    exit 1
fi

TASK="$1"
SYSTEM_PROMPT="You are a helpful AI agent that can perform any task using Bash commands.
Task: $TASK

Use the ReAct format strictly:
1. Thought: Your reasoning step by step.
2. Action: If needed, wrap a single Bash command in <action>command here</action>. Only one action per response. Use this for any external interaction (e.g., ls, curl, grep).
3. If you have the final answer, wrap it in <final>your final answer</final> and stop.

Do not execute commands yourself—only suggest them in <action>.
Keep responses concise."

HISTORY=""
MAX_ITER=10  # Prevent infinite loops
ITER=0

while [ $ITER -lt $MAX_ITER ]; do
    ((ITER++))
    PROMPT="$SYSTEM_PROMPT\n\nHistory:\n$HISTORY\n\nNow, continue reasoning for the task."

    echo "--- Sending prompt to Gemini ---" >&2
    RESPONSE=$(gemini "$PROMPT")  # Assumes 'gemini' CLI outputs the response to stdout

    echo "Gemini Response:" >&2
    echo "$RESPONSE" >&2

    # Check for final answer
    if echo "$RESPONSE" | grep -q "<final>"; then
        FINAL=$(echo "$RESPONSE" | sed -n 's/.*<final>\(.*\)<\/final>.*/\1/p')
        echo "Final Answer: $FINAL"
        break
    fi

    # Check for action
    if echo "$RESPONSE" | grep -q "<action>"; then
        ACTION=$(echo "$RESPONSE" | sed -n 's/.*<action>\(.*\)<\/action>.*/\1/p')
        echo "Executing action: $ACTION" >&2
        OBS=$(bash -c "$ACTION" 2>&1)
        echo "Observation: $OBS" >&2
        HISTORY="$HISTORY\n\nGemini: $RESPONSE\nObservation: $OBS"
    else
        echo "No action or final answer found. Stopping." >&2
        break
    fi
done

if [ $ITER -eq $MAX_ITER ]; then
    echo "Reached max iterations without final answer." >&2
fi