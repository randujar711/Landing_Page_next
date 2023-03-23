from app import app
from models import db, Project

def run_seeds():
    print('Seeding database ... 🌱')
    # Add your seed data here
    with app.app_context():
      project1 = Project('GalaxyFarm', 'Working on galaxy farm was decently interesting as I continued to develop my bootstrap skills. I used it as a sandbox to develop my bootstrap skills. Check it out!', 'Bootstrap & Javascript', '/galaxyfarm.jpg')
      project2 = Project('@RayShotThis', 'One of my first projects was for a local photographer who needed to officially display his work. I managed to use an image slider and implement a grid with hover effects over the images.', 'Bootstrap & Javascript', '/rayshotthis.jpg')
      project3 = Project('GilqProductions', 'GilqProductions is a do it all artist whose skills range from comedic videos to graphic design.', 'Bootstrap, CSS', '/gilqp.jpg')
      db.session.add_all([project1, project2, project3])
      db.session.commit()
      print (project1) 
      print('Done! 🌳')

run_seeds()