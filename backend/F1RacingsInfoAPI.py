from flask import Flask, request, jsonify
from flask_cors import CORS
import fastf1
import pandas as pd
from datetime import datetime
import json

todaysDateTime = datetime.now()
currentYear = datetime.now().year

app = Flask(__name__)
CORS(app)

fastf1.Cache.enable_cache('f1_cache')

def serializeData(df):
  if df is None or not isinstance(df, pd.DataFrame):
    return []
  
  if df.empty:
     return []
  
  df_copy = df.copy()

  for col in df_copy.columns:
    try:
      if pd.api.types.is_datetime64_any_dtype(df_copy[col]):
        df_copy[col] = df_copy[col].apply(
          lambda x: x.strftime('%Y-%m-%d %H:%M:%S') if not pd.isna(x) else None
        )
      
      elif pd.api.types.is_timedelta64_dtype(df_copy[col]):
              df_copy[col] = df_copy[col].apply(
                  lambda x: str(x) if not pd.isna(x) else None
              )
          # Handle other non-serializable types
      else:
        df_copy[col] = df_copy[col].apply(
            lambda x: x if pd.notna(x) and x != pd.NaT else None
        )
    except Exception as e:
       df_copy[col] = df_copy[col].astype(str)
  return df_copy.to_dict('records')

#health check
@app.route('/api/health',methods=['GET'])
def healthCheck():
  return jsonify({"status": "F1RacingInfo API is Running Successfully"})

# Events Information

# events
@app.route('/api/eventInfo/events',methods=['GET'])
def events():
  try:
    year = int(request.args.get('year',int(currentYear)))
    schedule = fastf1.get_event_schedule(year)

    events = serializeData(df=schedule)
    return jsonify({f"API_NAME":"EVENT SCHEDULE FOR THE YEAR","events":events})
  except Exception as e:
    return jsonify({"error":str(e)}), 500

# specific event information
@app.route('/api/eventInfo/spec-event',methods=['GET'])
def specificEvent():
   try:
      place = int(request.args.get('place'))
      year = int(request.args.get('year',int(currentYear)))

      event = fastf1.get_event(year=year,gp=place)

      event_data = {
         "RoundNumber":int(event['RoundNumber']),
         "Country":event['Country'],
         "Location":event['Location'],
         "OffEventName":event['OfficialEventName'],
         "Date":str(event['EventDate']),
         "Name":event['EventName'],
         "SessionDetails":{
            "Session1Details":{
               "Name":event['Session1'],
               "Date":str(event['Session1Date']),
               "DateUTC":str(event['Session1DateUtc'])
            },
            "Session2Details":{
               "Name":event['Session2'],
               "Date":str(event['Session2Date']),
               "DateUTC":str(event['Session2DateUtc'])
            },
            "Session3Details":{
               "Name":event['Session3'],
               "Date":str(event['Session3Date']),
               "DateUTC":str(event['Session3DateUtc'])
            },
            "Session4Details":{
               "Name":event['Session4'],
               "Date":str(event['Session4Date']),
               "DateUTC":str(event['Session4DateUtc'])
            },
            "Session5Details":{
               "Name":event['Session5'],
               "Date":str(event['Session5Date']),
               "DateUTC":str(event['Session5DateUtc'])
            }
            
         }
      }
      return jsonify({"API_NAME":"EVENT SCHEDULE FOR SPECIFIC YEAR & PLACE ","event_data":event_data})
   except Exception as e:
      return jsonify({"error":str(e)}), 500
   
# get remaining events in the schedule
@app.route('/api/eventInfo/eventsRemaining',methods=['GET'])
def eventsRemaining():
  try:
     schedule = fastf1.get_events_remaining(todaysDateTime)

     events = serializeData(schedule)

     return jsonify({"API_NAME":"EVENT SCHEDULE FOR THE REMAINING YEAR","events":events})
  except Exception as e:
     return jsonify({"error":str(e)}), 500
  
# Session Data
@app.route('/api/sessionInfo/driverStandings',methods=['GET'])
def driverStandings():
  try:
    year = int(request.args.get('year',int(currentYear)))
    track= str(request.args.get('track'))
    stype = str(request.args.get('stype'))

    session = fastf1.get_session(year,track,stype)
    session.load()

    driverStandingData = []
    for driver in session.drivers:
        info = session.get_driver(driver)
        driverStandingData.append({
          "DriverNo":driver,
          "Abbrv":info['Abbreviation'],
          "FullName":info['FullName'],
          "DriverId":info['DriverId'],
          "TeamName":info['TeamName'],
          "Position":int(info['Position'])
        })
    return jsonify({"API_NAME":"DRIVER STANDINGS","driverStanding":driverStandingData})
  except Exception as e:
     return jsonify({"error":str(e)}), 500
  
# race control messages
@app.route('/api/raceControl',methods=['GET'])
def raceControl():
   try:
      year = int(request.args.get('year',int(currentYear)))
      track = str(request.args.get('track'))
      stype = str(request.args.get('stype'))
      session = fastf1.get_session(year,track,stype)
      session.load()

      unRaceControl = session.race_control_messages

      RaceControl = serializeData(unRaceControl)
      return jsonify({"API_NAME":"RACE CONTROL MESSAGES","raceControl":RaceControl})
   except Exception as e:
      return jsonify({"error":str(e)}), 500 
   
if __name__ == '__main__':
  app.run(debug=True,port=1313)