#!/bin/bash

# Medical Files Organizer Script
# Organizes files from downloads folder into appropriate subject folders

# Create necessary subfolders
mkdir -p "Pharmacology & Therapeutics/notes"
mkdir -p "Pharmacology & Therapeutics/exams"
mkdir -p "Health System Management/pastpapers"
mkdir -p "Community Health/notes"
mkdir -p "Reproductive Health/notes/Labour & Delivery"
mkdir -p "Reproductive Health/notes/Antenatal Care"
mkdir -p "Reproductive Health/notes/Gynaecology"
mkdir -p "Reproductive Health/notes/Family Planning"
mkdir -p "Reproductive Health/notes/Pregnancy Complications"
mkdir -p "Paediatrics and Child Health/notes/Neonatology"
mkdir -p "Paediatrics and Child Health/notes/Growth & Development"
mkdir -p "Paediatrics and Child Health/notes/Paediatric Conditions"
mkdir -p "Surgery/notes/Orthopaedics"
mkdir -p "Surgery/notes/GIT Surgery"
mkdir -p "Surgery/notes/General Surgery"
mkdir -p "Surgery/notes/Trauma"
mkdir -p "Medicine/notes/Cardiovascular"
mkdir -p "Medicine/notes/Respiratory"
mkdir -p "Medicine/notes/GIT Medicine"
mkdir -p "Medicine/notes/Endocrinology"
mkdir -p "Medicine/notes/Nephrology"
mkdir -p "Medicine/notes/Neurology"
mkdir -p "Medicine/notes/Haematology"
mkdir -p "Medicine/notes/Infectious Diseases"
mkdir -p "General Pathology/notes/CVS Pathology"
mkdir -p "General Pathology/notes/GIT Pathology"
mkdir -p "General Pathology/notes/Renal Pathology"
mkdir -p "General Pathology/notes/CNS Pathology"
mkdir -p "General Pathology/notes/Musculoskeletal Pathology"
mkdir -p "Clinical Methods/notes"
mkdir -p "Behavioural Sciences/notes"
mkdir -p "Medical Parasitology & Laboratory Techniques/notes"
mkdir -p "Medical Parasitology & Laboratory Techniques/exams"

echo "Moving files to appropriate folders..."

# ============ PAEDIATRICS AND CHILD HEALTH ============
# Neonatology
mv "downloads/001a.History taking in Pediatrics (1) (1).pptx" "Paediatrics and Child Health/notes/" 2>/dev/null
mv "downloads/002a - Birth Asphyxia & Anoxia.pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/003a - Birth injuries - Care of birth Injuries (1).pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/003b_Congenital_disorders_&_abnormalities_in_neonates_1.pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/004 - premature neonate (1).pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/004 - premature neonate (2).pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/004 - premature neonate.pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/004a - SGA, LGA and AGA (1).pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/004a - SGA, LGA and AGA.pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/004a1 - ANAEMIA  NEONATORUM (1).pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/004a1 - ANAEMIA  NEONATORUM.pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/004b - Jaundice Neonatorum (1).pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/004b - Jaundice Neonatorum.pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/006a1 - Neonatal Sepsis (1).pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/006a1 - Neonatal Sepsis.pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/006a2 - Neonatal convulsions (1).pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/006a2 - Neonatal convulsions.pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/006a3 - Neonatal Seizures (1).pdf" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/006a3 - Neonatal Seizures.pdf" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/006c - Perinatal mortality (1).pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/006c - Perinatal mortality.pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/Neonatal Convulsions.pptx" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null
mv "downloads/LEC 5  Summary of neonatal resuscitation -PEADs.pdf" "Paediatrics and Child Health/notes/Neonatology/" 2>/dev/null

# Growth & Development
mv "downloads/007a - PAEDS - Growth & Development (1).pptx" "Paediatrics and Child Health/notes/Growth & Development/" 2>/dev/null
mv "downloads/007a - PAEDS - Growth & Development.pptx" "Paediatrics and Child Health/notes/Growth & Development/" 2>/dev/null
mv "downloads/008 - Nutritonal Disorders (1).pptx" "Paediatrics and Child Health/notes/Growth & Development/" 2>/dev/null
mv "downloads/008 - Nutritonal Disorders.pptx" "Paediatrics and Child Health/notes/Growth & Development/" 2>/dev/null
mv "downloads/008a2 - Rickets (1).pptx" "Paediatrics and Child Health/notes/Growth & Development/" 2>/dev/null
mv "downloads/008a2 - Rickets.pptx" "Paediatrics and Child Health/notes/Growth & Development/" 2>/dev/null
mv "downloads/SEVERE ACUTE MALNUTRITION (0).pptx" "Paediatrics and Child Health/notes/Growth & Development/" 2>/dev/null

# Paediatric Conditions
mv "downloads/1  Introduction to paediatrics.pptx" "Paediatrics and Child Health/notes/" 2>/dev/null
mv "downloads/3. CNS PAEDS.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/3. Thyroid  disorders in children.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/017a4 - GUS - UTIs in children.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/BEHAVIOURAL DISORDERS IN PAEDIATRICS-1_251002_051203.pdf" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/Cerebral palsy.ppt" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/Child Abuse Lecture.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/CHILD ABUSE1.ppt" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/CONGENITAL HEART DISEASES.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/Congenital hypothyroidism.pptx.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/constipation and diarrhoea .pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/CONVULSIVE DISORDERS ppt Notes-1.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/Crenitism and hypothyroidism.pptx.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/diabetis in children year 5.ppt" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/EPILEPSY DIAGNOSIS & TREATMENT KPA.ppt" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/Febrile convulsions.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/HYDROCEPHALUS.ppt" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/HYDROCEPHALUS.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/IMMUNIZATIONS KMTC-1-1.ppt" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/LEC 3  RHEUMATIC HEART DISEASE AND RDH IN CHILDREN - Copy.pdf" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/LEC 3  RHEUMATIC HEART DISEASE AND RDH IN CHILDREN.pdf" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/LEC 3 imperforate - Copy.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/LEC 4  club-foot - Copy.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/MENINGITIS IN CHILDREN CLASS.ppt" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/RHEUMATIC FEVER.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null
mv "downloads/rheumatic heart disease.pptx" "Paediatrics and Child Health/notes/Paediatric Conditions/" 2>/dev/null

# Paediatrics Textbooks & References
mv "downloads/Baby Nelson.pdf" "Paediatrics and Child Health/notes/" 2>/dev/null
mv "downloads/baby_nelson_general(1).pdf" "Paediatrics and Child Health/notes/" 2>/dev/null
mv "downloads/Basic Paediatric protocal 5th edition 24th Oct  2022.pdf" "Paediatrics and Child Health/notes/" 2>/dev/null
mv "downloads/Basic_Pediatric_protocol_2022_kaeJmO0 (1).pdf" "Paediatrics and Child Health/notes/" 2>/dev/null
mv "downloads/Illustrated_Textbook_of_Paediatrics_Tom_Lissauer,_Will_Carroll_Z.pdf" "Paediatrics and Child Health/notes/" 2>/dev/null
mv "downloads/Nelson_Textbook_of_Pediatrics,_17th_Edition_Richard_E_Behrman_MD.pdf" "Paediatrics and Child Health/notes/" 2>/dev/null

# Paediatrics Past Papers
mv "downloads/Paediatrics papers.pdf" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/PAEDIATRICs PAPERS.pdf" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/Paeds - FQE Past Paper.pdf" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/PAEDS FQE 2010 SPECIAL ESAY.pdf" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/PEADS.. FQE. 2019.pdf" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/FQE PAEDIATRICS MARCH 2020.pdf" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/FQE PAEDIATRICS paper 1 2013-2-1.docx" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/FQE PAEDIATRICS with answers-1.doc" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/FQE 2022 JUNE Paediatrics.pdf" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/FQE 2023 JUNE Peadiatrics & Health.pdf" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/FQE 2024 FEB Paediatrics.pdf" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/Copy Future CO's PAEDS_Quiz 2nd Yr Sem1 (1).pptx" "Paediatrics and Child Health/pastpapers/" 2>/dev/null
mv "downloads/Future CO's PAEDS_Quiz 2nd Yr Sem1 (1).pptx" "Paediatrics and Child Health/pastpapers/" 2>/dev/null

echo "Paediatrics files moved..."


# ============ REPRODUCTIVE HEALTH ============
# Labour & Delivery
mv "downloads/1 INTRODUCTION TO LABOUR.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/1 PROLONGED LABOUR.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/2 OBSTRUCTED LABOUR.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/3 PRECIPITATE LABOUR.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/4. ABNORMAL LABOUR.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/5. OBSTRUCTED LABOR.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/6. LabourInduction.ppt" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/7. labor....ppt" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/abnormal labor CMD.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/obstructed labor.pdf" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/Normal Labor.pdf" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/Normal labor.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/LABOR AND DELIVERY [Autosaved].pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/LABOR AND DELIVERY.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/LABOR PART II.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/Induction of labor.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/THE 2ND STAGE OF NORMAL LABOUR.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/THE 3RD STAGE OF LABOUR.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/2. THE PARTOGRAPH.ppt" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/THE PARTOGRAPH TT.ppt" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/Partogram.PPT" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/FORCEP PROCEDURE.ppt" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/FORCEPS_DELIVERY_AND_VACCUM_EXTRACTION.ppt" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/2. BREECH PRESENTATIONS - Koros E.K-1.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/BREECH PRESENTATION.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/20210106_BreechDeliverySOP.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/Mal  PRESENTATION.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/CORD PRESENTATION.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/CPD.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/fetal distress.ppt" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/10 PREMATURE RUPTURE OF MEMBRANES.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/PREMATURE RUPTURE OF MEMBRANES.doc" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/PRETERM LABOR.doc" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/Preterm Labor.pdf" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/POST TERM.ppt" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/AMTSL_Wallchart_Single_FINAL.pdf" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null

# Postpartum
mv "downloads/9 POSTPARTUM HEMORRHAGE.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/Postpartum Hemorrhage(PPH).pdf" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/Normal Puerperium.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/THE NORMAL PUERPERIUM.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/puerperium.pdf" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/Abnormal Puerperium.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/ABNORMAL PUPERIUM.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/Abnormal_Puerperium.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/PUERPERAL SEPSIS.pdf" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/genital tears - Copy.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null
mv "downloads/uterine rupture.pptx" "Reproductive Health/notes/Labour & Delivery/" 2>/dev/null

# Antenatal Care
mv "downloads/ANC.pptx" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/PREG CHANGES.pptx" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/7_PHYSIOLOGICAL_CHANGES_IN_PREGNANCY_Copy_Copy_Copy_Copy_Copy.pptx" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/PREGNACY Diagnosis.ppt" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/Diagnosis of Pregnancy y2.pdf" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/Obstetric History lesson 7.pdf" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/Obstetric History Y2.pdf" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/MULTIPLE  PREGNANCY1.ppt" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/IUGR and  IUFD.ppt" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/Stillbirth.pdf" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/AMNIOCENTESIS.doc" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/Amniotic Fluid Disorders.pdf" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/OLIGOHYDRAMNIOS & POLYHYDRAMNIOS.pptx" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/oligohydramnios1.ppt" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null
mv "downloads/Polyhydramnios and Oligohydramnios.pptx" "Reproductive Health/notes/Antenatal Care/" 2>/dev/null

# Pregnancy Complications
mv "downloads/ANAEMIA IN PREGNANCY - Copy.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/ANAEMIA IN PREGNANCY .....pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/ANAEMIA IN PREGNANCY.MAX.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/ANEMIA IN PREGNANCY nasty.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/ANEMIA IN PREGNANCY.doc" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/anemia in pg.pdf" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/Antepartum Haemorrhage.1 (2).docx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/Antepartum Hemorrhage.pdf" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/Antepartum Hemorrhage.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/HYPERPERTENSION IN PREGNANCY.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/hypertension in pg.pdf" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/HYPERTENSION IN PREGNANCY-1.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/HypertensioninPregnancy1007Berg.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/HYPERTENSIVE DISORDERS IN PREGNANCY.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/HYPERTENSIVE STATES IN PREGNANCY.1.docx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/pregnancy_hypertension-Ogindo.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/PRE ECLAMPSIA.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/pre-eclampsia.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/20200721_eclampsiaprotocol_no county (1).pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/DIABETES in Pregnancy.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/DIABETES IN PREGNANCY.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/DIABETES MELLITUS & PREGNANCY.doc" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/DIABETES MELLITUS IN PREGNANCY (2).doc" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/dm in pregn.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/DM in pregnancy.pdf" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/5. UTI IN PREGNANCY.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/URINARY TRACT INFECTION IN PREGNANCY.doc" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/7. DVT IN PREGNANCY (ob p.131).-1-1-1.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/DVT IN PREGNANCY.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/DVT in Pregnancy.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/8. Cardiac Disease in Pregnancy.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/cardiac diseases.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/HIV and Pregnancyy 2016.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/MALARIA IN PREGNANCY.pdf" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/Malaria-in-Pregnancy xp.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/Malaria-in-Pregnancy.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/Sickle Cell Disease in Pregnancy.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/torch-infection-93450613.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/ECTOPIC PREGNANCY 13TH NOV 09-1.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/ECTOPIC PREGNANCY CMD.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/Ecttopic Preg_044614.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/Abortion..ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/RH IN ISOIMMUNIZATION AND OTHER BLOOD GROUP.doc" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/Rh Incompartibility xp.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/Rhesus Alloimmunization.pdf" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/MANAGEMENT OF A RHESUS NEGATIVE MOTHER.pptx" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null
mv "downloads/OVERVIEW OF MATERNAL MORTALITY IN KENYA.ppt" "Reproductive Health/notes/Pregnancy Complications/" 2>/dev/null

# Gynaecology
mv "downloads/GYNAECOLOGICAL HISTORY AND EXAMINATION (1).pptx" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/GYNAECOLOGY ppt-1 (1).ppt" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/GYNAECOLOGY ppt-1.ppt" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/GYNAECOLOGY-2 (1).docx" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/GYNAECOLOGY-2.docx" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/GYNAECOLOGY.ppt" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/week_2_ASSESSMENT_OF_A_PATIENT_WITH_A_GYNAECOLOGICAL_PROBLEM.pptx" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/week 3 Menstrual disorders.pptx" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/week 3 THE HORMONAL CYCLES.pptx" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/abnormaluterinebleeding.ppt" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/15-Uterine Fibroids.ppt" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/Benign ovarian tumors.ppt" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/Diagnosis_and_Management_of_Simple_Ovarian_Cysts.pdf" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/Pelvic Inflammatory Disease.pptx" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/pelvic organ prolapse.pptx" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/Bartholin.pdf" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/INFERTILITY (1).pdf" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/INFERTILITY.pdf" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/AMBIGUOUS GENITALIA.pptx" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/HYPOTHALAMO-PITUITARY-OVARIAN AXIS (1).pdf" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/HYPOTHALAMO-PITUITARY-OVARIAN AXIS.pdf" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/SURGICAL PROCEDURES FOR A& C.ppt" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/CONGENITAL   ABNORMALITIES-2.pptx" "Reproductive Health/notes/Gynaecology/" 2>/dev/null
mv "downloads/congenital .ppt" "Reproductive Health/notes/Gynaecology/" 2>/dev/null

# Family Planning
mv "downloads/1. FAMILY PLANNING-1-2.pptx" "Reproductive Health/notes/Family Planning/" 2>/dev/null
mv "downloads/FAMILY PLANNING.ppt" "Reproductive Health/notes/Family Planning/" 2>/dev/null
mv "downloads/Background of reproductive health midwifery (1).pptx" "Reproductive Health/notes/Family Planning/" 2>/dev/null
mv "downloads/Background of reproductive health midwifery.pptx" "Reproductive Health/notes/Family Planning/" 2>/dev/null

# RH Textbooks
mv "downloads/DC Dutta's Textbook of Gynecology- 8th edition_2020.pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/DC_Duttas_Textbook_of_Obstetrics_Including_Perinatology_and_Contraception.pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/Dutta textbook of obsetrics.pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/Current_Diagnosis_Treatment_Obstetrics_Gynecology,_11th_Edition.pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/Essential obstetrics and gynaecology ( etc.) (Z-Library) (1).pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/Gynaecology illustrated ( etc.) (Z-Library).pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/gynecology_by_ten_teachers_20th_edition_Ash_Monga,_Stephen_Dobbs.pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/NATIONAL_GUIDELINES_ON_QUALITY_OBSTETRICS_AND_PERINATAL_CARE_August.pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/NATIONAL_GUIDELINES_ON_QUALITY_OBSTETRICS_AND_PERINATAL_CARE_Final.pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/REPRODUCTIVE HEALTH 1 (1).docx" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/Reproductive health.pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/3. Male and Female Reproductive system-2.pdf" "Reproductive Health/notes/" 2>/dev/null
mv "downloads/5.  Embrology Anatomy.pptx" "Reproductive Health/notes/" 2>/dev/null

# RH Past Papers
mv "downloads/FQE RH 2019-1.pdf" "Reproductive Health/pastpapers/" 2>/dev/null
mv "downloads/FQE 2022 JUNE RH.pdf" "Reproductive Health/pastpapers/" 2>/dev/null
mv "downloads/FQE 2023 JUNE RH.pdf" "Reproductive Health/pastpapers/" 2>/dev/null
mv "downloads/FQE 2024 FEB Reproductive Health.pdf" "Reproductive Health/pastpapers/" 2>/dev/null
mv "downloads/RH..FQE 2016-1.docx" "Reproductive Health/pastpapers/" 2>/dev/null
mv "downloads/Future CO's RH_Quizs 2nd Yr Sem1 (1).pptx" "Reproductive Health/pastpapers/" 2>/dev/null
mv "downloads/exams rh medicine and surgery 2.1 005648 (1).pdf" "Reproductive Health/pastpapers/" 2>/dev/null

echo "Reproductive Health files moved..."


# ============ SURGERY ============
# General Surgery
mv "downloads/001. Surgery 1 Notes.docx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/introduction to surgery with.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/history taking in surgery-1.ppt" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/P0ST OP CARE.ppt" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/PERI-OPERATIVE CARE AND ANAESTHETIC NURSING.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/PERIOPERATIVE NURSING LECTURE 2-1.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/perioperative nursing.pdf" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/8 B - Metabolic Response to Injury.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/Wound_Closure_Manual.pdf" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/INTRODUCTION HERNIAS.ppt" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/GROIN HERNIAS.ppt" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/VENTRAL HERNIAS.ppt" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/9. BREAST  CONDITIONS.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/breast issues.pdf" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/8 A- CHEST CONDITIONS.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/25 A - NECK CONDITIONS.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/HEAD_AND.PPT.ppt" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/5. SKIN CONDITIONS- DIABETIC FOOT.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/VMMC INTRODUCTION.ppt" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/23 A- VOLUNTARY MEDICAL MALE CIRCUMCISION- INTRODUCTION.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/23 B-  VMMC- PROCEDURES.pptx" "Surgery/notes/General Surgery/" 2>/dev/null

# GIT Surgery
mv "downloads/14 A- GIT SURGERY (1).pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/14 A- GIT SURGERY.pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/14 B- GIT SURGERY Cont'd (1).pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/14 B- GIT SURGERY Cont'd.pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/14- OESOPHAGUS AND THE GIT.pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/15 A- GIT SURGERY - ACUTE ABDOMEN (1).pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/15 A- GIT SURGERY - ACUTE ABDOMEN.pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/15 A- GIT SURGERY- Acute Abdomen.ppt" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/15 B- GIT SURGERY - ACUTE ABDOMEN Contd'.pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/7. Acute Abdomen.pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/25. Abdominal Trauma.ppt" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/15 B- GIT SURGERY- Haemorrhoids (Piles).pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/15 C- GIT SURGERY- Haemorrhoids (Piles) (2).pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/15 C- GIT SURGERY- Haemorrhoids (Piles).pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/HEMORRHOIDS.doc" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/16 A- GIT SURGERY- HEPATOBILIARY SURGERY.pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null
mv "downloads/16 B- GIT SURGERY- HEPATOCELLULAR CARCINOMA (HCC).pptx" "Surgery/notes/GIT Surgery/" 2>/dev/null

# Orthopaedics
mv "downloads/10 A- Orthopaedics -Introduction.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/10 B- Orthopaedics - Fractures-1.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/10 B- Orthopaedics - Fractures.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/11 A- Orthopaedics - Epiphyseal Injury-1.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/11 A- Orthopaedics - Epiphyseal Injury.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/lsn 5 Principles of fracture management.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/fractures.pdf" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/FRACTURES OF FOREARM BONES( ULNA & RADIUS.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/Bartons Fracture-1.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/12- Fractures & Dislocations of the Upper Limb.ppt" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/12. INJURIES OF THE UPPER LIMBS.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/INJURIES OF THE UPPER LIMBS-1.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/Upper Limb fracture.docx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/13 A- INJURIES OF THE LOWER LIMBS (1).pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/13 A- INJURIES OF THE LOWER LIMBS.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/13 B-  INJURIES OF THE LOWER LIMB Cont'd (1).pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/13 B-  INJURIES OF THE LOWER LIMB Cont'd.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/Lower limb fractures & dislocations-1.ppt" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/Lower limb fractures ✓.pdf" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/17. Non-Traumatic Bone Conditions- Osteomyelitis.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/CHRONIC OSTEOMYELITIS.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/SUB-ACUTE OSTEOMYLETIS.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/OSTEOMYELITIS SECONDARY TO INTERNAL FIXATION.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/18. NON-TRAUMATIC BONE  CONDITIONS- RHEUMATOID ARTHRITIS.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/19 A-  NON-TRAUMATIC BONE CONDITIONS TB OF THE BONE.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/19 B-  NON-TRAUMATIC BONE CONDITIONS TB OF THE BONE.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/20- NON-TRAUMATIC BONE CONDITIONS- Congenital Bone Defects.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/20. NON-TRAUMATIC BONE CONDITIONS- Congenital Bone Defects.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/21. NON-TRAUMATIC BONE CONDITIONS- SLE.ppt" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/22- NON-TRAUMATIC BONE CONDITIONS- SCFE.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/22. NON-TRAUMATIC BONE CONDITIONS- SCFE.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/9. Septic arthritis.ppt" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/Osteoarthritis.pdf" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/OSTEOARTHRITIS.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/OSTEOPOROSIS.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null
mv "downloads/Treatment of orthopaedic disorders.pptx" "Surgery/notes/Orthopaedics/" 2>/dev/null

# Trauma & Neurosurgery
mv "downloads/26 B- NERVOUS SYSTEM- HEAD INJURY.pptx" "Surgery/notes/Trauma/" 2>/dev/null
mv "downloads/28 A - NERVOUS SYSTEM- SPINAL CORD INJURIES.pptx" "Surgery/notes/Trauma/" 2>/dev/null
mv "downloads/GLASGOW COMA SCALE ppt lwm.pptx" "Surgery/notes/Trauma/" 2>/dev/null
mv "downloads/Trauma_lecture_1.pdf" "Surgery/notes/Trauma/" 2>/dev/null
mv "downloads/Haemorrhagic Shock.pdf" "Surgery/notes/Trauma/" 2>/dev/null

# Urology
mv "downloads/27 A- UROGENITAL CONDITIONS- HAEMATURIA.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/27 B- UROGENITAL CONDITIONS- HYPOSPADIAS.pptx" "Surgery/notes/General Surgery/" 2>/dev/null
mv "downloads/27 C- UROGENITAL CONDITIONS- UNDESCENDED TESTIS.pptx" "Surgery/notes/General Surgery/" 2>/dev/null

# Surgery Textbooks
mv "downloads/Adams's_Outline_of_Fractures_Including_Joint_Injuries_David_L_Hamblen.pdf" "Surgery/notes/" 2>/dev/null
mv "downloads/Clinical Orthopaedic Examination (Ronald McRae) (Z-Library).pdf" "Surgery/notes/" 2>/dev/null
mv "downloads/Essential_Orthopaedics_and_Trauma_David_Dandy,_Dennis_Edwards_Z.pdf" "Surgery/notes/" 2>/dev/null
mv "downloads/Essential_Surgery_Problems,_Diagnosis_and_Management,_6e_Feb_19.pdf" "Surgery/notes/" 2>/dev/null
mv "downloads/Handbook of Fractures (Kenneth Egol) (Z-Library) (1).pdf" "Surgery/notes/" 2>/dev/null
mv "downloads/Handbook of Fractures (Kenneth Egol) (Z-Library).pdf" "Surgery/notes/" 2>/dev/null
mv "downloads/Lecture_Notes_on_Orthopaedics_and_Fractures.pdf" "Surgery/notes/" 2>/dev/null
mv "downloads/Orthopedic_examination_made_easy.pdf" "Surgery/notes/" 2>/dev/null
mv "downloads/Principles_and_Practice_of_Surgery_O_James_Garden,_Rowan_W_Parks.pdf" "Surgery/notes/" 2>/dev/null
mv "downloads/Surgery 2.pdf" "Surgery/notes/" 2>/dev/null
mv "downloads/Textbook_Of_Orthopedics_Includes_Clinical_Examination_Methods_In.pdf" "Surgery/notes/" 2>/dev/null

# Surgery Past Papers
mv "downloads/FQE Surge 2011.pdf" "Surgery/pastpapers/" 2>/dev/null
mv "downloads/FQE SURGERY 2019.pdf" "Surgery/pastpapers/" 2>/dev/null
mv "downloads/FQE SURGERY 2021 (2) (1).pdf" "Surgery/pastpapers/" 2>/dev/null
mv "downloads/FQE SURGERY 2021 (2) (2).pdf" "Surgery/pastpapers/" 2>/dev/null
mv "downloads/FQE SURGERY 2021 (2).pdf" "Surgery/pastpapers/" 2>/dev/null
mv "downloads/FQE 2021 FEB Surgery.pdf" "Surgery/pastpapers/" 2>/dev/null
mv "downloads/FQE 2022 JUNE Surgery.pdf" "Surgery/pastpapers/" 2>/dev/null
mv "downloads/FQE 2023 JUNE Surgery.pdf" "Surgery/pastpapers/" 2>/dev/null
mv "downloads/FQE 2024 FEB Surgery.pdf" "Surgery/pastpapers/" 2>/dev/null
mv "downloads/Future CO's SURGE_Quiz 2nd Yr Sem1 (1).pptx" "Surgery/pastpapers/" 2>/dev/null

echo "Surgery files moved..."


# ============ MEDICINE ============
# Cardiovascular
mv "downloads/1-CVS PATHOLOGY=1.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/001_CVS_PATHOLOGY_Review_of_CVS_anatomy_&_physiology.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/Cardiovascular pathology++.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/CARDIOVASCULAR DISEASES.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/Clinical Pathology 2_ Understanding Cardiovascular Disorders and Congenital Anomalies.pdf" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/Diseases of the Cardiovascular System (CVD) - A Comprehensive Overview.pdf" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/004c - Valvular heart disease.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/005 - DISODERS OF ARTERIES.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/005a - Disorders of arteries - CAD.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/005a - Infective Endocarditis (IE).pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/005c - ANEURYSM.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/005c - ANEURYSM(1).pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/006a - HYPERTENSION.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/006c Disorders of veins n Lymphatics.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/INFECTIVE ENDOCARDITIS.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/LEC 4  DVT.pptx" "Medicine/notes/Cardiovascular/" 2>/dev/null
mv "downloads/DEEP VENOUS THROMBOSIS.doc" "Medicine/notes/Cardiovascular/" 2>/dev/null

# Respiratory
mv "downloads/007a0 - RS - Anatomy & physiology review.pptx" "Medicine/notes/Respiratory/" 2>/dev/null
mv "downloads/007a1 - Disorders of the URT.pptx" "Medicine/notes/Respiratory/" 2>/dev/null
mv "downloads/007a2 - Disorders of the LRT.pptx" "Medicine/notes/Respiratory/" 2>/dev/null
mv "downloads/NRSG 364 -Respiratory disorders-2 (1).ppt" "Medicine/notes/Respiratory/" 2>/dev/null
mv "downloads/Kenya Medical Training College_ Clinical Methods I - The Respiratory System.pdf" "Medicine/notes/Respiratory/" 2>/dev/null

# GIT Medicine
mv "downloads/GIT MEDICINE LECTURE Edited-1-1-1.ppt" "Medicine/notes/GIT Medicine/" 2>/dev/null
mv "downloads/GIT Medicine.ppt" "Medicine/notes/GIT Medicine/" 2>/dev/null
mv "downloads/GUT DISORDERS.pptx" "Medicine/notes/GIT Medicine/" 2>/dev/null
mv "downloads/Inflammatory Bowel Disease.pdf" "Medicine/notes/GIT Medicine/" 2>/dev/null

# Endocrinology
mv "downloads/1. Introduction to the endocrine system.pptx" "Medicine/notes/Endocrinology/" 2>/dev/null
mv "downloads/ENDOCRINOLOGY.pptx" "Medicine/notes/Endocrinology/" 2>/dev/null
mv "downloads/DM.pptx" "Medicine/notes/Endocrinology/" 2>/dev/null
mv "downloads/diabetes type 1.pptx (1).pdf" "Medicine/notes/Endocrinology/" 2>/dev/null
mv "downloads/MGNT OF DKA.pptx" "Medicine/notes/Endocrinology/" 2>/dev/null
mv "downloads/acromegaly.pptx" "Medicine/notes/Endocrinology/" 2>/dev/null
mv "downloads/GONADAL DISORDERS.pptx.pptx" "Medicine/notes/Endocrinology/" 2>/dev/null
mv "downloads/GONADS.ppt2.ppt.pptx" "Medicine/notes/Endocrinology/" 2>/dev/null

# Nephrology
mv "downloads/nephrology part 1.pptx" "Medicine/notes/Nephrology/" 2>/dev/null

# Neurology
mv "downloads/BrainAttackdefinitionandidofstrokepresentaiton.ppt" "Medicine/notes/Neurology/" 2>/dev/null
mv "downloads/STROKE.pdf" "Medicine/notes/Neurology/" 2>/dev/null

# Haematology
mv "downloads/Hematology (1).pdf" "Medicine/notes/Haematology/" 2>/dev/null
mv "downloads/Hematology.pdf" "Medicine/notes/Haematology/" 2>/dev/null
mv "downloads/CMS 251 UNIT 2  HAEMATOLOGY I - ANAEMIA.docx" "Medicine/notes/Haematology/" 2>/dev/null
mv "downloads/ABO-Rh.ppt" "Medicine/notes/Haematology/" 2>/dev/null
mv "downloads/(DIC) DISSEMINATED INTRAVASCULAR COAGULOPATHY (3).doc" "Medicine/notes/Haematology/" 2>/dev/null

# Infectious Diseases
mv "downloads/HIV.pdf" "Medicine/notes/Infectious Diseases/" 2>/dev/null
mv "downloads/STDS.pdf" "Medicine/notes/Infectious Diseases/" 2>/dev/null
mv "downloads/STIs.pdf" "Medicine/notes/Infectious Diseases/" 2>/dev/null
mv "downloads/SEXUALLY TRANSMITTED DISEASES (2).pptx" "Medicine/notes/Infectious Diseases/" 2>/dev/null
mv "downloads/SEXUALLY TRANSMITTED DISEASES (3).pptx" "Medicine/notes/Infectious Diseases/" 2>/dev/null
mv "downloads/GUD.ppt" "Medicine/notes/Infectious Diseases/" 2>/dev/null

# Dermatology
mv "downloads/DERMATOLOGY .pptx" "Medicine/notes/" 2>/dev/null

# Internal Medicine General
mv "downloads/, INTERNAL MEDICINE-1.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/poisoning.ppt" "Medicine/notes/" 2>/dev/null

# Medicine Textbooks
mv "downloads/Harrison Internal Medicine.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Harrison's_Principles_of_Internal_Medicine,_20th_Edition_Volume.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Harrisons_Principles_of_Internal_Medicine_Self_Assessment_and_Board.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Harrisons_Principles_of_Internal_Medicine,_20th_Edition_J_Larry.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Davidsons_Principles_and_Practice_of_Medicine_Ian_D_Penman,_BScHons.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Stanley_Davidson,_Sir_Mark_W_J_Strachan_S_K_Sharma_John_A_A_Hunter.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Kumar_and_Clarks_Clinical_Medicine_10E_10th_Edition_2020_Adam_Feather.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Cecil_Essentials_of_Medicine_Cecil_Medicine_Edward_J_Wing_MD_FACP.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Oxford_American_Handbook_of_Clinical_Medicine_2nd_Edition_Oxford.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/250_Cases_in_Clinical_Medicine_MRCP_Study_Guides_Fifth_Edition_Eirini.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Case_Files_Internal_Medicine_Eugene_C_Toy,_Gabriel_M_Aisenberg_Z.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Case_Studies_in_Emergency_Medicine_Rebecca_Jeanmonod_MD,_Michelle.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Case_Studies_in_Internal_Medicine_Atul_Kakar,_Atul_Gogia_Z_Library.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Symptom_to_Diagnosis_An_Evidence_Based_Guide_Scott_D_C_Stern,_Adam.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Textbook_of_Medicine_MRCP_Study_Guides_Robert_L_Souhami_MD_FRCP.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Differential_Diagnosis_Mnemonics_Thomas_J_Donnelly_MD,_Christopher.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Differential_Diagnosis_of_Common_Complaints_Robert_H_Seller,_Andrew.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Bedside Clinics In Medicine (Arup Kumar Kundu) (Z-Library).pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Clinical Medicine Procedure Manual – edition 2009 1CLINICAL MEDICINEProcedure manual.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/DOCTOR ON DUTY TREATMENT GUIDE - DR ASIF ALI KHAN (1).pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Current_Diagnosis_and_Treatment_Physical_Medicine_and_Rehabilitation.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/Kenya_National_Guidelines_for_Cardiovascular_Disea_250115_222750.pdf" "Medicine/notes/" 2>/dev/null
mv "downloads/National_DM_Guidelines_Version_15_2024_Signed-compressed.pdf" "Medicine/notes/" 2>/dev/null

# Medicine Past Papers
mv "downloads/FQE MED 2013.pdf" "Medicine/pastpapers/" 2>/dev/null
mv "downloads/FQE MEDICINE 2021.pdf" "Medicine/pastpapers/" 2>/dev/null
mv "downloads/FQE 2021 FEB Medicine.pdf" "Medicine/pastpapers/" 2>/dev/null
mv "downloads/FQE 2022 JUNE Medicine.pdf" "Medicine/pastpapers/" 2>/dev/null
mv "downloads/FQE 2023 JUNE Medicine.pdf" "Medicine/pastpapers/" 2>/dev/null
mv "downloads/FQE 2024 FEB Medicine.pdf" "Medicine/pastpapers/" 2>/dev/null
mv "downloads/Medicine FQE 2022.pdf" "Medicine/pastpapers/" 2>/dev/null
mv "downloads/Future CO's I-MED_Quiz 2nd Yr Sem1 (1).pptx" "Medicine/pastpapers/" 2>/dev/null
mv "downloads/JKUAT MEDICINE PAPER FOR 2023 FQE(Degree sio Diploma).pdf" "Medicine/pastpapers/" 2>/dev/null

echo "Medicine files moved..."


# ============ PHARMACOLOGY & THERAPEUTICS ============
mv "downloads/1. CADIOVASCULAR SYSTEM DRUGS.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/ANTI-DYSLIPIDEMIAS.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/ANTI-HYPERTENSIVES.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Hypertensive drugs Y2.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Drugs used in Heart Failure.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Drugs used in Ischemic Heart Disease.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Anticoagulants.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/DRUGS ACTING ON THE GASTROINTESTINAL SYSTEM (1).pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/GUT DRUGS.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/ANTIDIARRHEALS &LAXATIVES new-1.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/antispasmodics.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Endocrine pharmacology.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Introduction to Anti-diabetics-1.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/ORAL ANTIDIABETIC AGENTS-1.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/pp-insulin-.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Renal Pharmacology.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Anticancer Drugs.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/ANTIHELMINTHICS.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/ANTIMYCOBACTERIAl-1.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/ANTIPROTOZOAS.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Antipsychotic Agents & Lithium.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/ANTIPSYCHOTICS.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Drugs_Used_in_Parkinsonism_&_Other_Movement_Disorders_new.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Drug administration.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/metabolism and excretion final draft.ppt" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Metabolism and Excretion of Drugs sent.ppt" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Pharmacodynamics.ppt" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Pharmacokinetics.ppt" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/PHARMACOLOGY  1 SEPT 2021.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/pharmacology 1-1-1.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/pharmacology 1.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/PHARM ---ALL NOTES-1-2.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/PHARM ---ALL NOTES.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Essential drugs.pptx" "Pharmacology & Therapeutics/notes/" 2>/dev/null

# Pharmacology Textbooks
mv "downloads/Basic_and_Clinical_Pharmacology,_11th_Edition_Bertram_Katzung,_Susan.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Basic_Clinical_Pharmacology,_15th_Edition_Bertram_G_Katzung,_Todd.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Essentials_of_Medical_Pharmacology_8th_Edition_DIGITAL_VERSION_K.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null
mv "downloads/Pharmacology_and_Pharmacotherapeutics,_24e_etc_Z_Library.pdf" "Pharmacology & Therapeutics/notes/" 2>/dev/null

# Pharmacology Past Papers
mv "downloads/pharmacology papers.pdf" "Pharmacology & Therapeutics/exams/" 2>/dev/null
mv "downloads/Pharmacology Past Papers.pdf" "Pharmacology & Therapeutics/exams/" 2>/dev/null
mv "downloads/Future CO's C-PHARMA_Quiz 2nd Yr Sem1 (1).pptx" "Pharmacology & Therapeutics/exams/" 2>/dev/null

echo "Pharmacology files moved..."

# ============ GENERAL PATHOLOGY ============
# CVS Pathology
mv "downloads/Clinical pathology 2.pdf" "General Pathology/notes/CVS Pathology/" 2>/dev/null
mv "downloads/CLINICAL PATHOLOGY 2.docx" "General Pathology/notes/CVS Pathology/" 2>/dev/null

# GIT Pathology
mv "downloads/GIT Pathology, Esophagus December.pdf" "General Pathology/notes/GIT Pathology/" 2>/dev/null
mv "downloads/Pathology the Stomach.pdf" "General Pathology/notes/GIT Pathology/" 2>/dev/null
mv "downloads/Small and large intestine Pathology.pdf" "General Pathology/notes/GIT Pathology/" 2>/dev/null
mv "downloads/Tumors of the small & Large Intestine.pdf" "General Pathology/notes/GIT Pathology/" 2>/dev/null
mv "downloads/Appendix Pathology.pdf" "General Pathology/notes/GIT Pathology/" 2>/dev/null
mv "downloads/Liver Patholoy II.pdf" "General Pathology/notes/GIT Pathology/" 2>/dev/null

# Renal Pathology
mv "downloads/kidney pathology lesson 1 October.pdf" "General Pathology/notes/Renal Pathology/" 2>/dev/null

# CNS Pathology
mv "downloads/CNS Pathology.pdf" "General Pathology/notes/CNS Pathology/" 2>/dev/null

# Musculoskeletal Pathology
mv "downloads/Musculoskeletal Pathology November.pdf" "General Pathology/notes/Musculoskeletal Pathology/" 2>/dev/null

# General Pathology
mv "downloads/UNIT 2_ CELL PATHOLOGY - LECTURE NOTES (2017).pdf" "General Pathology/notes/" 2>/dev/null
mv "downloads/Fundamentals_of_Pathology_Medical_Course_and_Step_1_Review_2019.pdf" "General Pathology/notes/" 2>/dev/null
mv "downloads/Future CO's C-PATHO_Quiz 2nd Yr Sem1 (1).pptx" "General Pathology/exams/" 2>/dev/null

echo "Pathology files moved..."

# ============ MEDICAL BIOCHEMISTRY ============
mv "downloads/LECTURE 2 BIOCHEMISTRY 1.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem 1_Lecture 10.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem 1_Lecture 11.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem 1_Lecture 12.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem 1_Lecture 3.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem 1_Lecture 4.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem 1_Lecture 5.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem 1_Lecture 6.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem 1_Lecture 7.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem 1_Lecture 8.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem I_Lecture 1.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Med Biochem II_Lecture 1.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Medical Biochem II_Lecture 2.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Medical Biochem II_Lecture 3.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/Medical Biochem II_Lecture 4.doc" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/MECHANISM OF ENZYME ACTIONS.pptx" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/epigenetics.pdf" "Medical Biochemistry/notes/" 2>/dev/null
mv "downloads/UPDATED BIOCHEMISTRY II Scoresheet  2024.docx" "Medical Biochemistry/exams/" 2>/dev/null

echo "Biochemistry files moved..."

# ============ HUMAN ANATOMY ============
mv "downloads/ANATOMY AND PHYSIOLOGY.pdf" "Human Anatomy/notes/" 2>/dev/null
mv "downloads/Anatomy_A_Photographic_Atlas_Johannes_W_Rohen,_Chihiro_Yokochi_etc.pdf" "Human Anatomy/notes/" 2>/dev/null
mv "downloads/Ross_and_Wilson_ANATOMY_and_PHYSIOLOGY_in_Health_and_Illness_Eleventh.pdf" "Human Anatomy/notes/" 2>/dev/null
mv "downloads/HUMAN ANATOMY & PHYSIOLOGY final copy.docx" "Human Anatomy/notes/" 2>/dev/null
mv "downloads/HUMAN ANATOMY COURSE OUTLINE SEM 1 and 2.docx" "Human Anatomy/notes/" 2>/dev/null
mv "downloads/radiographic anatomy.pdf" "Human Anatomy/notes/" 2>/dev/null
mv "downloads/BASIC PRINCIPLES OF RADIOGRAPHY-1.docx" "Human Anatomy/notes/" 2>/dev/null
mv "downloads/Chest_X_Ray_Interpretation_Michael_Darby,_Anthony_Edey,_Ladli_Chandratreya.pdf" "Human Anatomy/notes/" 2>/dev/null
mv "downloads/Interpreting_Chest_X_Rays_Illustrated_with_100_Cases_Philip_Eng.pdf" "Human Anatomy/notes/" 2>/dev/null
mv "downloads/END OF FIRST SEMESTER - ANATOMY & PHYSIOLOGY.docx" "Human Anatomy/exams/" 2>/dev/null

echo "Anatomy files moved..."


# ============ COMMUNITY HEALTH ============
mv "downloads/Community Health I-1.pdf" "Community Health/notes/" 2>/dev/null
mv "downloads/Community Health II.pptx" "Community Health/notes/" 2>/dev/null
mv "downloads/Community Health III.pptx" "Community Health/notes/" 2>/dev/null
mv "downloads/Community Health IV Notes.pptx" "Community Health/notes/" 2>/dev/null
mv "downloads/COMMUNITY HEALTH OMC E-4-1-1.pptx" "Community Health/notes/" 2>/dev/null
mv "downloads/INTRODUCTION TO COMMUNITY HEALTH.pdf" "Community Health/notes/" 2>/dev/null
mv "downloads/Community Strategy notes.pptx" "Community Health/notes/" 2>/dev/null
mv "downloads/Community Strategy- Nduta.pdf" "Community Health/notes/" 2>/dev/null
mv "downloads/COMMUNITY STRATEGY-1-1.pptx" "Community Health/notes/" 2>/dev/null
mv "downloads/COMMUNITY STRATEGY-1.pptx" "Community Health/notes/" 2>/dev/null
mv "downloads/UNIT 4 - PRIMARY HEALTH CARE AND CBHC 2019 Topic 5 and 6.pdf" "Community Health/notes/" 2>/dev/null
mv "downloads/Short_Textbook_of_Public_Health_Medicine_for_the_Tropics,_4th_Edition.pdf" "Community Health/notes/" 2>/dev/null
mv "downloads/Occupational_Hygiene_and_Risk_Management.pdf" "Community Health/notes/" 2>/dev/null
mv "downloads/fe5eb-advance-information-sheet-environmental-health.pdf" "Community Health/notes/" 2>/dev/null
mv "downloads/Kenya_National_Immunization_Policy_Guidelines_Vers_250115_222950.pdf" "Community Health/notes/" 2>/dev/null
mv "downloads/npl_ch_33_01_guideline_2015_eng_national_malaria_t_250115_222019.pdf" "Community Health/notes/" 2>/dev/null
mv "downloads/INTEGRATED_GUIDELINE_FOR_TUBERCULOSIS_LEPROSY_AND_250115_221840.pdf" "Community Health/notes/" 2>/dev/null
mv "downloads/Nutrition and Dietetics (Shubhangini A Joshi) (Z-Library).pdf" "Community Health/notes/" 2>/dev/null

# Community Health Past Papers
mv "downloads/community health questions.pdf" "Community Health/pastpapers/" 2>/dev/null
mv "downloads/FQE - CM FEB 2021 Community Health, 22-Feb-2021.pdf" "Community Health/pastpapers/" 2>/dev/null
mv "downloads/FQE 2021 FEB Community Health.pdf" "Community Health/pastpapers/" 2>/dev/null
mv "downloads/FQE 2022 JUNE Community Health.pdf" "Community Health/pastpapers/" 2>/dev/null
mv "downloads/FQE 2023 JUNE Community Health.pdf" "Community Health/pastpapers/" 2>/dev/null
mv "downloads/FQE 2024 FEB Community Health.pdf" "Community Health/pastpapers/" 2>/dev/null
mv "downloads/FQE Community Health June 2022.pdf" "Community Health/pastpapers/" 2>/dev/null
mv "downloads/FQE KRCHN July 2024, Paper 3 Community Health, 24-7-24.pdf" "Community Health/pastpapers/" 2>/dev/null

echo "Community Health files moved..."

# ============ HEALTH SYSTEM MANAGEMENT ============
mv "downloads/HEALTH SYSTEM MANAGEMENT FOR BASIC MEDICAL STUDENTS-1.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/Health system management II (1).pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/Health system management II-1.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/Healthcare in Kenya- HSM.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/HSM (KMTC) Manual - Final-1 (1).pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/HSM (KMTC) Manual - Final-1.pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/Hsm 2 Health information systems 21 (1).pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/Hsm 2 Health information systems 21.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/HSM 2.pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/HSM II-1.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/hsm ii.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/HSM MODULE NOTES.docx" "Health System Management/notes/" 2>/dev/null
mv "downloads/HSM - MUTETI-2.docx" "Health System Management/notes/" 2>/dev/null
mv "downloads/HSM--II (III).docx" "Health System Management/notes/" 2>/dev/null
mv "downloads/HSM--II' (II)'.docx" "Health System Management/notes/" 2>/dev/null
mv "downloads/hsm-2-2018-notes.pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/HSM.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/SEM 2 hsm.pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/ORGANIZATION OF HEALTH  CARE SERVICES-Notes.pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/Leadership and management.pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/Effective_leadership_and_management_in_nursing_Eleanor_J_Sullivan.pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/HUMAN RESOURCE MANAGEMENT kmtc notes.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/financial resource management 1.pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/FINANCIAL RESOURCE MANAGEMENT III.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/Public_Expenditure_Control,Finanancial_regulation_&_procedures.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/Commodity and supply chain notes-16.11.2023 (1).pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/Communication and Networking in Health service delivery.pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/Quality Assuarance in health services delivery.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/QUALITY ASSURANCE IN HEALTH.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/components of quality management systems in healthcare (1).pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/components of quality management systems in healthcare.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/project management-1.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/project management.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/CORRUPTION NOTES.pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/medical ethics.pdf" "Health System Management/notes/" 2>/dev/null
mv "downloads/KMTC 3RD YR CLASS LEGAL FRAMEWORKS AND ETHICS IN GBV[1].pptx" "Health System Management/notes/" 2>/dev/null
mv "downloads/Module 1 - INTRODUCTION TO GBV.pptx" "Health System Management/notes/" 2>/dev/null

# Health Statistics & Research
mkdir -p "Health System Management/notes/Health Statistics"
mkdir -p "Health System Management/notes/Research"
mv "downloads/HEALTH STATISTICS-1.pdf" "Health System Management/notes/Health Statistics/" 2>/dev/null
mv "downloads/Health Statistics-2.pdf" "Health System Management/notes/Health Statistics/" 2>/dev/null
mv "downloads/Health Statistics Assignment.pdf" "Health System Management/notes/Health Statistics/" 2>/dev/null
mv "downloads/Lecture 1 notes Health statistics.doc" "Health System Management/notes/Health Statistics/" 2>/dev/null
mv "downloads/Lecture 3 notes Health statistics.doc" "Health System Management/notes/Health Statistics/" 2>/dev/null
mv "downloads/Lecture 4 notes Health statistics.doc" "Health System Management/notes/Health Statistics/" 2>/dev/null
mv "downloads/Lecture 5 notes Health statistics.doc" "Health System Management/notes/Health Statistics/" 2>/dev/null
mv "downloads/Lecture 6 notes Health statistics .doc" "Health System Management/notes/Health Statistics/" 2>/dev/null
mv "downloads/Lecture 8 notes health statistics.doc" "Health System Management/notes/Health Statistics/" 2>/dev/null
mv "downloads/Sample MCQ questions Health statistics.doc" "Health System Management/notes/Health Statistics/" 2>/dev/null
mv "downloads/Introduction_to_Biostatistics_and_Research_Methods_P_S_S_Sundar.pdf" "Health System Management/notes/Health Statistics/" 2>/dev/null

mv "downloads/Lecture 1 notes research.doc" "Health System Management/notes/Research/" 2>/dev/null
mv "downloads/Lecture 2 notes Research .doc" "Health System Management/notes/Research/" 2>/dev/null
mv "downloads/Lecture 4 notes Research.doc" "Health System Management/notes/Research/" 2>/dev/null
mv "downloads/COMMON TERMINOLOGIES USED IN RESEARCH.pptx" "Health System Management/notes/Research/" 2>/dev/null
mv "downloads/Research MCQ sample questions.doc" "Health System Management/notes/Research/" 2>/dev/null
mv "downloads/Research-Proposal-and-Thesis.doc" "Health System Management/notes/Research/" 2>/dev/null
mv "downloads/Signed_Research_guidelines[1].pdf" "Health System Management/notes/Research/" 2>/dev/null
mv "downloads/THESIS2.pdf" "Health System Management/notes/Research/" 2>/dev/null
mv "downloads/Workbook_for_Neumann_Social_research_methods_qualitative_and_quantitative.pdf" "Health System Management/notes/Research/" 2>/dev/null

# HSM Past Papers
mkdir -p "Health System Management/pastpapers"
mv "downloads/HSM 2015.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/HSM CAT SEP 2015.docx" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/HSM EXAM AND ANSWER.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/HSM II SEPT 2015 PAPER ONE.docx" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/HSM march 2015.docx" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/HSM March 2018.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/HSM MARCH 2024 NORMS.docx" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/HSM MCQS.doc" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/HSM PAST PAPER.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/HSM revision papers.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/HSM Sep 2015.doc" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/Sep 2014 HSM cat.docx" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/SEPT 2014 HSM II.doc" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/SEPT 2014 HSM-1.doc" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/SEPT 2014 HSM.doc" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/SEPT 2015 HSM 1 PAPER 1.doc" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/SEPT 2015 HSM 1 PAPER 2.doc" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/SEPT 2015 HSM KSM.docx" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/SEPT 2015 HSM NAKURU.doc" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/MARCH 2016 HSM PAPER A.docx" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/FQE - CM FEB 2021 HSM, 22-Feb-2021.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/FQE 2021 FEB HSM.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/FQE 2022 JUNE HSM.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/FQE 2023 JUNE HSM.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/FQE 2024 FEB HSM.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/FQE HSM 2019.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/FQE HSM 2021.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/FQE HSM June 2022.pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/KMTC KAPKATET MOCKS 2023 HSM(same as 2022 fqe ).pdf" "Health System Management/pastpapers/" 2>/dev/null
mv "downloads/Revision papers .pdf" "Health System Management/pastpapers/" 2>/dev/null

echo "Health System Management files moved..."


# ============ BEHAVIOURAL SCIENCES ============
mv "downloads/1.Behavioral Science Full Notes.pdf" "Behavioural Sciences/notes/" 2>/dev/null
mv "downloads/Behavioral science intro(1).docx" "Behavioural Sciences/notes/" 2>/dev/null
mv "downloads/mental illness.pptx" "Behavioural Sciences/notes/" 2>/dev/null
mv "downloads/Mental health act.pdf" "Behavioural Sciences/notes/" 2>/dev/null
mv "downloads/Mental health Act.pptx" "Behavioural Sciences/notes/" 2>/dev/null
mv "downloads/MSE.pdf" "Behavioural Sciences/notes/" 2>/dev/null
mv "downloads/MOOD DISORDERS -DEPRESSION.ppt" "Behavioural Sciences/notes/" 2>/dev/null
mv "downloads/EATING DISORDERS.ppt" "Behavioural Sciences/notes/" 2>/dev/null

echo "Behavioural Sciences files moved..."

# ============ CLINICAL METHODS ============
mv "downloads/CLINICAL METHODS-L3.pptx" "Clinical Methods/notes/" 2>/dev/null
mv "downloads/Hx.pdf" "Clinical Methods/notes/" 2>/dev/null
mv "downloads/Hutchisons_Clinical_Methods_E_Book_An_Integrated_Approach_Michael.pdf" "Clinical Methods/notes/" 2>/dev/null
mv "downloads/3. PROFESSIONALISM.pptx" "Clinical Methods/notes/" 2>/dev/null
mv "downloads/IPC.ppt" "Clinical Methods/notes/" 2>/dev/null

echo "Clinical Methods files moved..."

# ============ MEDICAL PHYSIOLOGY ============
mv "downloads/Medical Physiology Continuous Assessment Test 1 - Cohort September 2023.pdf" "Medical Physiology/" 2>/dev/null

echo "Medical Physiology files moved..."

# ============ MEDICAL PARASITOLOGY ============
mv "downloads/Parasitology (Responses).xlsx" "Medical Parasitology & Laboratory Techniques/exams/" 2>/dev/null
mv "downloads/HERMAPHRODITIC FLUKES_ Classification, Morphology & Treatment.pdf" "Medical Parasitology & Laboratory Techniques/notes/" 2>/dev/null

echo "Parasitology files moved..."

# ============ FIRST AID ============
mkdir -p "First Aid/notes"
mv "downloads/1. introduction to computers lecture notes1718.pdf" "First Aid/notes/" 2>/dev/null

echo "First Aid files moved..."

# ============ MOVE REMAINING FQE PAPERS ============
mv "downloads/FQE For Jun -July 2023.pdf" "Medicine/pastpapers/" 2>/dev/null
mv "downloads/CATs Examination Links.docx" "Medicine/pastpapers/" 2>/dev/null

echo "All files organized!"
echo ""
echo "Summary of organization:"
echo "- Paediatrics: Neonatology, Growth & Development, Paediatric Conditions"
echo "- Reproductive Health: Labour & Delivery, Antenatal Care, Gynaecology, Family Planning, Pregnancy Complications"
echo "- Surgery: General Surgery, GIT Surgery, Orthopaedics, Trauma"
echo "- Medicine: Cardiovascular, Respiratory, GIT Medicine, Endocrinology, Nephrology, Neurology, Haematology, Infectious Diseases"
echo "- Pharmacology & Therapeutics: Notes and Exams"
echo "- General Pathology: CVS, GIT, Renal, CNS, Musculoskeletal Pathology"
echo "- Medical Biochemistry: Lecture notes"
echo "- Human Anatomy: Notes and Exams"
echo "- Community Health: Notes and Past Papers"
echo "- Health System Management: Notes, Health Statistics, Research, Past Papers"
echo "- Behavioural Sciences: Notes"
echo "- Clinical Methods: Notes"
echo ""
echo "Done!"
