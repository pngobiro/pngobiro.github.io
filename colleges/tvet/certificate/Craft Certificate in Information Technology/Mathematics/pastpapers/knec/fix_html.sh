#!/bin/bash

# Create a new temporary file
echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mathematics - November 2017 | KNEC Past Papers</title>
    <link rel="stylesheet" href="styles.css">
    <script src="js/sidebar-navigation.js" defer></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <!-- BEGIN HEADER -->
    <header>
        <div class="container">
            <h1>Mathematics</h1>
            <h2>November 2017</h2>
            <div class="exam-details">
                <p>Paper Code: [PAPER CODE]</p>
                <p>Duration: 3 hours</p>
                <p>Module: Craft Certificate in Information Technology</p>
            </div>
        </div>
    </header>
    <!-- END HEADER -->
    
    <div class="container main-content">
        <!-- BEGIN SIDEBAR -->
        <div class="sidebar">
            <div class="sidebar-header">
                <h3>Past Papers</h3>
            </div>
            <nav class="sidebar-nav">
                <ul>
                    <li><a href="2023j.html">July 2023</a></li>
                    <li><a href="2017nov.html" class="active">November 2017</a></li>
                    <li><a href="2017july.html">July 2017</a></li>
                    <li><a href="2016nov.html">November 2016</a></li>
                    <li><a href="2016july.html">July 2016</a></li>
                    <li><a href="2015j.html">July 2015</a></li>
                    <li><a href="2014j.html">July 2014</a></li>
                    <li><a href="2013n.html">November 2013</a></li>
                    <li><a href="index.html">Home</a></li>
                </ul>
            </nav>
        </div>
        <!-- END SIDEBAR -->
        
        <!-- BEGIN MAIN CONTENT -->
        <main>
            <div class="paper-navigation top">
                <a href="2017july.html" class="btn">Previous Paper (July 2017)</a>
                <a href="index.html" class="btn">Home</a>
                <a href="2018j.html" class="btn">Next Paper (July 2018)</a>
            </div>

            <!-- BEGIN INSTRUCTIONS -->
            <section class="paper-intro">
                <h3>Instructions to Candidates</h3>
                <ul>
                    <li>You should have the following for this examination:</li>
                    <ul>
                        <li>Scientific calculator</li>
                        <li>Statistical tables</li>
                        <li>Geometrical set</li>
                        <li>Graph paper</li>
                    </ul>
                    <li>This paper consists of TWO sections.</li>
                    <li>Answer ALL the questions in section A and any FOUR questions in section B.</li>
                    <li>Write your answers in the answer booklet provided.</li>
                    <li>All questions should be answered in English.</li>
                </ul>
            </section>
            <!-- END INSTRUCTIONS -->

            <!-- BEGIN PAPER CONTENT -->
            <div class="paper-content">' > 2017nov.html.tmp

# Add Section A header
echo '
                <!-- BEGIN SECTION A -->
                <section class="section-divider">
                    <h2>SECTION A (40 marks)</h2>
                    <p>Answer ALL questions in this section.</p>
                </section>' >> 2017nov.html.tmp

# Extract and add questions 1-10 from the original file
sed -n '/<!-- BEGIN QUESTION 1 -->/,/<!-- END QUESTION 10 -->/p' 2017nov.html >> 2017nov.html.tmp

# Add Section B header
echo '
                <!-- BEGIN SECTION B -->
                <section class="section-divider">
                    <h2>SECTION B (60 marks)</h2>
                    <p>Answer any FOUR questions from this section.</p>
                </section>' >> 2017nov.html.tmp

# Extract and add questions 11-15 from the original file
sed -n '/<!-- BEGIN QUESTION 11 -->/,/<!-- END QUESTION 15 -->/p' 2017nov.html >> 2017nov.html.tmp

# Add closing tags
echo '            </div>
            <!-- END PAPER CONTENT -->

            <div class="paper-navigation bottom">
                <a href="2017july.html" class="btn">Previous Paper (July 2017)</a>
                <a href="index.html" class="btn">Home</a>
                <a href="2018j.html" class="btn">Next Paper (July 2018)</a>
            </div>
        </main>
        <!-- END MAIN CONTENT -->
    </div>
    
    <!-- BEGIN FOOTER -->
    <footer>
        <div class="container">
            <p>&copy; 2025 MATHEMATICS Past Papers Collection | Kenya National Examinations Council</p>
        </div>
    </footer>
    <!-- END FOOTER -->
</body>
</html>' >> 2017nov.html.tmp

# Replace the original file
mv 2017nov.html.tmp 2017nov.html