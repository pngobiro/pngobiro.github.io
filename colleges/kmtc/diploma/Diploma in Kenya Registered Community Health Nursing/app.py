from flask import Flask, render_template, send_file
import sqlite3
from datetime import datetime, timedelta
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
import io

app = Flask(__name__)
DATABASE = 'timetable.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with app.app_context():
        db = get_db_connection()
        with open('schema.sql', 'r') as f:
            db.executescript(f.read())
        
        # Populate subjects
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

        for subject in year1_subjects:
            db.execute('INSERT INTO subjects (name, year) VALUES (?, ?)', (subject, 1))
        for subject in year2_subjects:
            db.execute('INSERT INTO subjects (name, year) VALUES (?, ?)', (subject, 2))
        for subject in year3_subjects:
            db.execute('INSERT INTO subjects (name, year) VALUES (?, ?)', (subject, 3))
        db.commit()
        db.close()


@app.route('/')
def index():
    conn = get_db_connection()
    subjects = conn.execute('SELECT * FROM subjects').fetchall()
    conn.close()

    timetable_entries = []
    start_date = datetime(2025, 8, 31) # Tomorrow
    for i, subject_row in enumerate(subjects):
        current_date = start_date + timedelta(days=i)
        timetable_entries.append({
            'date': current_date.strftime('%Y-%m-%d'),
            'day_of_week': current_date.strftime('%A'),
            'subject': subject_row['name'],
            'year': subject_row['year']
        })
    return render_template('index.html', timetable=timetable_entries)

@app.route('/generate_pdf_web')
def generate_pdf_web():
    conn = get_db_connection()
    subjects = conn.execute('SELECT * FROM subjects').fetchall()
    conn.close()

    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=letter)
    styles = getSampleStyleSheet()
    story = []

    story.append(Paragraph("Diploma in Kenya Registered Community Health Nursing - Timetable", styles['h1']))
    story.append(Spacer(1, 0.2 * 10))

    start_date = datetime(2025, 8, 31) # Tomorrow
    for i, subject_row in enumerate(subjects):
        current_date = start_date + timedelta(days=i)
        story.append(Paragraph(f"{current_date.strftime('%Y-%m-%d')} ({current_date.strftime('%A')}): {subject_row['name']}", styles['Normal']))
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
    buffer.seek(0)
    return send_file(buffer, download_name='timetable_web.pdf', as_attachment=True, mimetype='application/pdf')

if __name__ == '__main__':
    init_db() # Initialize DB on first run
    app.run(debug=True)