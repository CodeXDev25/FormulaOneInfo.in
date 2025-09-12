import fastf1
from datetime import datetime

fastf1.Cache.enable_cache('f1_cache')

session = fastf1.get_event_schedule(2023)

print(session)