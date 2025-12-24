-- KMTC Common Courses URL Update Script
-- Generated: 2025-12-24T07:35:01.624879
-- Run this after consolidating common courses


-- Health Systems Management
-- Consolidating 2 locations to: colleges/kmtc/diploma/Common Courses/Health Systems Management

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%203/Health%20Systems%20Management', 
    'colleges/kmtc/diploma/Common%20Courses/Health%20Systems%20Management')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%203/Health%20Systems%20Management%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%203/Health%20Systems%20Management', 
    'colleges/kmtc/diploma/Common%20Courses/Health%20Systems%20Management')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%203/Health%20Systems%20Management%';

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Health%20Systems%20Management', 
    'colleges/kmtc/diploma/Common%20Courses/Health%20Systems%20Management')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Health%20Systems%20Management%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Health%20Systems%20Management', 
    'colleges/kmtc/diploma/Common%20Courses/Health%20Systems%20Management')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Health%20Systems%20Management%';

-- Research Methodology
-- Consolidating 3 locations to: colleges/kmtc/diploma/Common Courses/Research Methodology

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%202/Research', 
    'colleges/kmtc/diploma/Common%20Courses/Research%20Methodology')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%202/Research%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%202/Research', 
    'colleges/kmtc/diploma/Common%20Courses/Research%20Methodology')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%202/Research%';

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Clinical%20Medicine%20and%20Surgery/Health%20System%20Management/notes/Research', 
    'colleges/kmtc/diploma/Common%20Courses/Research%20Methodology')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Clinical%20Medicine%20and%20Surgery/Health%20System%20Management/notes/Research%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Clinical%20Medicine%20and%20Surgery/Health%20System%20Management/notes/Research', 
    'colleges/kmtc/diploma/Common%20Courses/Research%20Methodology')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Clinical%20Medicine%20and%20Surgery/Health%20System%20Management/notes/Research%';

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Research', 
    'colleges/kmtc/diploma/Common%20Courses/Research%20Methodology')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Research%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Research', 
    'colleges/kmtc/diploma/Common%20Courses/Research%20Methodology')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Research%';

-- HIV-AIDS and STIs
-- Consolidating 2 locations to: colleges/kmtc/diploma/Common Courses/HIV-AIDS and STIs

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%201/HIV%20and%20AIDS', 
    'colleges/kmtc/diploma/Common%20Courses/HIV-AIDS%20and%20STIs')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%201/HIV%20and%20AIDS%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%201/HIV%20and%20AIDS', 
    'colleges/kmtc/diploma/Common%20Courses/HIV-AIDS%20and%20STIs')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%201/HIV%20and%20AIDS%';

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/HIV-AIDS%20%26%20STI', 
    'colleges/kmtc/diploma/Common%20Courses/HIV-AIDS%20and%20STIs')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/HIV-AIDS%20%26%20STI%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/HIV-AIDS%20%26%20STI', 
    'colleges/kmtc/diploma/Common%20Courses/HIV-AIDS%20and%20STIs')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/HIV-AIDS%20%26%20STI%';

-- Human Anatomy
-- Consolidating 2 locations to: colleges/kmtc/diploma/Common Courses/Human Anatomy

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Human%20Anatomy%20And%20Physiology', 
    'colleges/kmtc/diploma/Common%20Courses/Human%20Anatomy')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Human%20Anatomy%20And%20Physiology%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Human%20Anatomy%20And%20Physiology', 
    'colleges/kmtc/diploma/Common%20Courses/Human%20Anatomy')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Human%20Anatomy%20And%20Physiology%';

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%201/Anatomy%20and%20Physiology', 
    'colleges/kmtc/diploma/Common%20Courses/Human%20Anatomy')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%201/Anatomy%20and%20Physiology%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%201/Anatomy%20and%20Physiology', 
    'colleges/kmtc/diploma/Common%20Courses/Human%20Anatomy')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%201/Anatomy%20and%20Physiology%';

-- Epidemiology
-- Consolidating 2 locations to: colleges/kmtc/diploma/Common Courses/Epidemiology

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%203/Epidemiology', 
    'colleges/kmtc/diploma/Common%20Courses/Epidemiology')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%203/Epidemiology%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%203/Epidemiology', 
    'colleges/kmtc/diploma/Common%20Courses/Epidemiology')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Kenya%20Registered%20Community%20Health%20Nursing/Year%203/Epidemiology%';

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Epidemiology', 
    'colleges/kmtc/diploma/Common%20Courses/Epidemiology')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Epidemiology%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Epidemiology', 
    'colleges/kmtc/diploma/Common%20Courses/Epidemiology')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Epidemiology%';

-- Health Statistics
-- Consolidating 2 locations to: colleges/kmtc/diploma/Common Courses/Health Statistics

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Clinical%20Medicine%20and%20Surgery/Health%20System%20Management/notes/Health%20Statistics', 
    'colleges/kmtc/diploma/Common%20Courses/Health%20Statistics')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Clinical%20Medicine%20and%20Surgery/Health%20System%20Management/notes/Health%20Statistics%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Clinical%20Medicine%20and%20Surgery/Health%20System%20Management/notes/Health%20Statistics', 
    'colleges/kmtc/diploma/Common%20Courses/Health%20Statistics')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Clinical%20Medicine%20and%20Surgery/Health%20System%20Management/notes/Health%20Statistics%';

UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Health%20Statistics', 
    'colleges/kmtc/diploma/Common%20Courses/Health%20Statistics')
WHERE topicUrl LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Health%20Statistics%';

UPDATE PastPapers 
SET url = REPLACE(url, 
    'colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Health%20Statistics', 
    'colleges/kmtc/diploma/Common%20Courses/Health%20Statistics')
WHERE url LIKE '%colleges/kmtc/diploma/Diploma%20in%20Health%20Records%20and%20Information%20Technology/Year%201/Health%20Statistics%';