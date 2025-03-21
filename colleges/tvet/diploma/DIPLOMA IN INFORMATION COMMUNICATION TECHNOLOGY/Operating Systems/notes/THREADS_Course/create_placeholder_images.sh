#!/bin/bash

# Create directories if they don't exist
mkdir -p assets/images
mkdir -p assets/diagrams

# Module 1 images
convert -size 600x300 -background lightblue -fill navy -gravity center -font Arial label:"Single vs Multithreaded Process Models" assets/images/module1-single-vs-multithreaded.png
convert -size 600x300 -background lightblue -fill navy -gravity center -font Arial label:"Many-to-One Threading Model" assets/images/module1-many-to-one-model.png
convert -size 600x300 -background lightblue -fill navy -gravity center -font Arial label:"One-to-One Threading Model" assets/images/module1-one-to-one-model.png
convert -size 600x300 -background lightblue -fill navy -gravity center -font Arial label:"Many-to-Many Threading Model" assets/images/module1-many-to-many-model.png

# Module 2 images
convert -size 600x300 -background lightgreen -fill darkgreen -gravity center -font Arial label:"Dining Philosophers Problem" assets/images/module2-dining-philosophers.png
convert -size 600x300 -background lightgreen -fill darkgreen -gravity center -font Arial label:"Monitor Structure" assets/images/module2-monitor-structure.png
convert -size 600x300 -background lightgreen -fill darkgreen -gravity center -font Arial label:"Monitor with Condition Variables" assets/images/module2-monitor-condition-variables.png

# Module 3 images
convert -size 600x300 -background lightyellow -fill brown -gravity center -font Arial label:"CPU-I/O Burst Cycle" assets/images/module3-cpu-io-burst-cycle.png
convert -size 600x300 -background lightyellow -fill brown -gravity center -font Arial label:"CPU Burst Distribution" assets/images/module3-cpu-burst-distribution.png
convert -size 600x100 -background lightyellow -fill brown -gravity center -font Arial label:"FCFS Scheduling (P1, P2, P3)" assets/images/module3-fcfs-gantt1.png
convert -size 600x100 -background lightyellow -fill brown -gravity center -font Arial label:"FCFS Scheduling (P2, P3, P1)" assets/images/module3-fcfs-gantt2.png
convert -size 600x100 -background lightyellow -fill brown -gravity center -font Arial label:"Nonpreemptive SJF Scheduling" assets/images/module3-sjf-nonpreemptive.png
convert -size 600x100 -background lightyellow -fill brown -gravity center -font Arial label:"Preemptive SJF (SRTF) Scheduling" assets/images/module3-sjf-preemptive.png
convert -size 600x100 -background lightyellow -fill brown -gravity center -font Arial label:"Round Robin Scheduling" assets/images/module3-round-robin.png
convert -size 600x300 -background lightyellow -fill brown -gravity center -font Arial label:"Multilevel Queue Scheduling" assets/images/module3-multilevel-queue.png
convert -size 600x300 -background lightyellow -fill brown -gravity center -font Arial label:"Multilevel Feedback Queue Scheduling" assets/images/module3-multilevel-feedback-queue.png
convert -size 600x300 -background lightyellow -fill brown -gravity center -font Arial label:"Windows XP Priorities" assets/images/module3-windows-priorities.png

echo "Placeholder images created successfully!"
