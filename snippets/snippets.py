import fastf1
from datetime import datetime

today = datetime.now()

fastf1.Cache.enable_cache('f1_cache')

schedule = fastf1.get_events_remaining(today)

print(schedule)