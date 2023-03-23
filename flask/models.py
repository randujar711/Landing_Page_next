from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy() # create an instance of a database connection
migrate = Migrate(db) # associate migration functions to it

# This ORM has the migration and the model together
class Project(db.Model):
    # This is the migration part
    __tablename__ = 'projects'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=True, nullable=False)
    desc = db.Column(db.Text, unique=False, nullable=True )
    stack = db.Column(db.String, unique=False, nullable=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    # This is regular old Python classes
    # Right here is where we "whitelist" what can be set when creating a user
    # any column omitted cannot be set by the user/app manually
    def __init__(self, title, desc, stack):
        self.title = title
        self.desc = desc
        self.stack = stack 

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'desc': self.desc,
            'stack': self.stack,
            'created_at': self.created_at
        }

    def __repr__(self):
        return '<Projects %r>' % self.title
