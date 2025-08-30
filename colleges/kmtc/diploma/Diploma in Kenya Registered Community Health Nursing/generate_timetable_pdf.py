from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
from datetime import datetime, timedelta

def generate_timetable_pdf(filename="timetable.pdf"):
    doc = SimpleDocTemplate(filename, pagesize=letter)
    styles = getSampleStyleSheet()
    story = []

    # Title
    story.append(Paragraph("Diploma in Kenya Registered Community Health Nursing - Timetable", styles['h1']))
    story.append(Spacer(1, 0.2 * 10))

    # Timetable data
    year1_subjects = [
        "Anatomy and Physiology", "Applied Communication in Nursing", "Cardiovascular Nursing",
        "Communication", "Community Health Nursing I", "Environmental Health Nursing",
        "Family Planning and Reproductive Health", "First Aid", "Fundamentals of Nursing I",
        "Gender and Sexuality in Reproductive Health", "Health Promotion", "Hematology",
        "HIV and AIDS", "HTN 1201: Hematological Nursing", "Human Nutrition", "Immunization",
        "Introduction to RH and Midwifery", "Maternal Newborn Health I", "Medical-Surgical Nursing",
        "Microbiology and Immunology", "PHAC 1203: Pharmacology", "Psychology",
        "Pulmonary Nursing", "Sociology and Anthropology", "Specialized Procedures I",
        "Trauma, Emergency and Basic Life Support"
    ]

    year2_subjects = [
        "Alimentary, Biliary and Dental Nursing", "Community Strategy", "Endocrinological Nursing",
        "ENT Nursing", "Gynaecology & Reproductive Health Nursing",
        "KRCHN PON 2101: Palliative Care and Oncology Nursing",
        "KRCHN RGU 2102: Renal- Genital Urinary Nursing", "Mental & Psychiatric Health Nursing",
        "Ophthalmic Nursing", "Orthopedic Nursing", "Pediatric Nursing, ETAT+ & IMCI",
        "Perioperative Nursing", "Pharmacology II", "Research"
    ]

    year3_subjects = [
        "Casualty Nursing Practicum", "Communicable & Vector-borne Diseases",
        "Community Assessment & Diagnosis", "Dermatological Nursing", "Epidemiology",
        "Gerontological Nursing & HBC", "Health Systems Management",
        "Healthcare for special populations", "Neurological Nursing"
    ]

    all_subjects = year1_subjects + year2_subjects + year3_subjects

    start_date = datetime(2025, 8, 31) # Tomorrow

    for i, subject in enumerate(all_subjects):
        current_date = start_date + timedelta(days=i)
        story.append(Paragraph(f"{current_date.strftime('%Y-%m-%d')} ({current_date.strftime('%A')}): {subject}", styles['Normal']))
        story.append(Spacer(1, 0.1 * 10))
        story.append(Paragraph("<b>Checklist:</b>", styles['Normal']))
        story.append(Paragraph("- [ ] Review notes", styles['Normal']))
        story.append(Paragraph("- [ ] Complete assigned readings", styles['Normal']))
        story.append(Paragraph("- [ ] Practice questions", styles['Normal']))
        story.append(Spacer(1, 0.1 * 10))
        story.append(Paragraph("<b>Comments:</b>", styles['Normal']))
        story.append(Paragraph("________________________________________________________________________", styles['Normal']))
        story.append(Paragraph("________________________________________________________________________", styles['Normal']))
        story.append(Spacer(1, 0.3 * 10))

    doc.build(story)
    print(f"Timetable PDF '{filename}' generated successfully.")

if __name__ == "__main__":
    generate_timetable_pdf()
