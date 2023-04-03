import requests
import os
from dotenv import load_dotenv
load_dotenv()



# access token của api mapbox
key = os.getenv("MAPBOX_ACCESS_TOKEN")

# Địa chỉ lat và long của địa điểm location
lat = 21.0277644
long = 105.8341598

# Địa chỉ lat và long của địa điểm tạo marker trên map (địa điểm đó sẽ được đánh dấu)
lat_marker = 21.0273644
long_marker = 105.8351598

# Thông tin của marker trên map như tên, màu sắc, kích thước ...
marker = f"pin-s+000({long_marker},{lat_marker})"
# Tạo link nhúng bản đồ với địa điểm location và marker
link = f"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+000({long_marker},{lat_marker})/{long},{lat},15,0,0/600x400?access_token={key}"

# In ra link nhúng bản đồ
print(link)