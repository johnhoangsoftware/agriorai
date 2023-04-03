import requests
import os
from dotenv import load_dotenv
load_dotenv()



# access token của api mapbox
key = os.getenv("MAPBOX_ACCESS_TOKEN")

# Địa chỉ lat và long của địa điểm location
lat = 21.0277644
long = 105.8341598

# tạo link nhúng map game với lat và long của địa điểm location với zoom 15
url = f"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+000({long},{lat})/{long},{lat},15,0,0/600x400?access_token={key}"

print(url)