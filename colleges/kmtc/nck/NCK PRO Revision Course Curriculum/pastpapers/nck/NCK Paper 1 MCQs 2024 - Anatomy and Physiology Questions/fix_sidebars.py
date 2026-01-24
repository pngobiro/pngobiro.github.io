import os
import re

# Navigation items (Filename, Icon, Title)
NAV_ITEMS = [
    ("index.html", "fas fa-th", "Dashboard"),
    ("anatomy.html", "fas fa-heartbeat", "Anatomy & Phys"),
    ("medsurg.html", "fas fa-procedures", "Med-Surg"),
    ("pharmacology.html", "fas fa-pills", "Pharmacology"),
    ("theatre.html", "fas fa-syringe", "Theatre Nursing"),
    ("fundamentals.html", "fas fa-user-nurse", "Fundamentals"),
    ("procedures.html", "fas fa-notes-medical", "Procedures"),
    ("dermatology.html", "fas fa-allergies", "Dermatology"),
    ("ent.html", "fas fa-deaf", "ENT"),
    ("ophthalmology.html", "fas fa-eye", "Ophthalmology"),
    ("dental.html", "fas fa-tooth", "Dental & GI"),
    ("emergency.html", "fas fa-ambulance", "Emergency"),
    ("reproductive.html", "fas fa-baby", "Reproductive"),
    ("immunology.html", "fas fa-shield-virus", "Immunology"),
    ("respiratory.html", "fas fa-lungs", "Respiratory"),
    ("hematology.html", "fas fa-tint", "Hematology"),
    ("neurology.html", "fas fa-brain", "Neurology"),
    ("ethics.html", "fas fa-balance-scale", "Ethics & Comm"),
    ("endocrine.html", "fas fa-dna", "Endocrine"),
    ("cardiovascular.html", "fas fa-heartbeat", "Cardiovascular"),
    ("palliative.html", "fas fa-dove", "Palliative Care"),
    ("critical_care.html", "fas fa-procedures", "Critical Care"),
    ("orthopedic.html", "fas fa-bone", "Orthopedic"),
    ("renal.html", "fas fa-kidneys", "Renal & Urology"),
    ("infectious.html", "fas fa-virus", "Infectious Dis"),
    ("midwifery.html", "fas fa-baby-carriage", "Midwifery")
]

def generate_sidebar(current_file):
    html = '            <nav class="sidebar-nav">\n'
    html += '                <div class="nav-group">\n'
    html += '                    <div class="nav-group-title">Navigation</div>\n'
    
    for filename, icon, title in NAV_ITEMS:
        active_class = ' active' if filename == current_file else ''
        html += '                    <a href="' + filename + '" class="nav-item sub-item' + active_class + '">\n'
        html += '                        <i class="' + icon + '"></i> ' + title + '\n'
        html += '                    </a>\n'
    
    html += '                </div>\n'
    html += '            </nav>'
    return html

def update_file(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Regex to find the <nav class="sidebar-nav"> ... </nav> block
        pattern = r'<nav class="sidebar-nav">.*?</nav>'
        new_sidebar = generate_sidebar(filename)
        
        new_content = re.sub(pattern, new_sidebar, content, flags=re.DOTALL)
        
        if content != new_content:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("Updated " + filename)
        else:
            print("No changes needed for " + filename)
            
    except Exception as e:
        print("Error updating " + filename + ": " + str(e))

# List all HTML files
files = [f for f in os.listdir('.') if f.endswith('.html')]

for f in files:
    update_file(f)
