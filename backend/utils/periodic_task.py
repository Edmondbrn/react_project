from apscheduler.schedulers.background import BackgroundScheduler
from utils.file_manager import delete_tmp


scheduler = BackgroundScheduler()
scheduler.add_job(delete_tmp, "cron", hour = 12)
scheduler.start()