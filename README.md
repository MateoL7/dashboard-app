# Front-End Coding Test

**Introduction**
Monitoring a large portfolio of sites with energy resources (including heat pumps, batteries, solar  
panels, and wind turbines) is a challenging task. Some of these resources have alerts that need  
to be made prominent to the user. Besides alerts, the user is interested in seeing the overall  
energy production from each site.

**Problem Statement**
Build a simple containerized dashboard application, to show a screen like below, using one of  
the standard UI frameworks. The values to fill in are provided in JSON format after the image.  
Use the images in your email for the left bar and top bar (these don’t need to be clickable).  
Also, given there is no CSS attached, focus on getting the dashboard elements right using the  
values from JSON, but ensure that the overall look and feel are generally similar to what’s  
shown.

# Solution

**Author**
Mateo Loaiza

**Choices**
For this coding test JavaScript, Node.js, and React.js were used.

**Considerations**
The following are just some comments I wanted to include which do not affect the basic functionality of the app.

1. The "Uptime" column is shown different from the one in the picture due to the fact that in the JSON provided, the "Uptime" data is in hours rather than in percentage.
2. The "Alerts" column will show every high and low alerts as red because I was trying to replicate the image. In the JSON "Gaulberg" has 1 low alert and the image provided shows it as red.
3. The JSON provided has 3 high alerts but no details and are not shown in the "Alerts" column, so I removed them and went with 0 high alerts.

## How to run the app locally

Run the following commands once you are in the folder:

1. npm install
2. npm run build
3. npm run start

You will be able to view your app in the browser: http://localhost:3000

## How to run in container

### Create Docker image

To create the Docker image, you will just need to use the Dockerfile that is already inside this project.
Once you have located it, you can run the following commands:

1. docker build -t my_app_image .

- _docker build_: This command tells Docker to build an image.
- _-t my_app_image_: This option tags the image with the name my_app_image.
- _._: The dot at the end of the command tells Docker to look for the Dockerfile in the current directory.

2. docker images

- This will allow you to check the information of the image you just created

### Run the container using the image

Once you have created your image, all you need to do is run the following command to run your container:

1. docker run -d -p 8080:3000 my_app_image

- _docker run_: This command creates and runs a container from the specified image.
- _-d_: This option runs the container in the background (detached mode).
- _-p 8080:3000_: This option maps port 3000 inside the container to port 8080 on your host machine. Change the port number if your application listens on a different port.
- _my_app_image_: This is the name of the Docker image you want to use for the container.

Your application should now be accessible at http://localhost:8080.
