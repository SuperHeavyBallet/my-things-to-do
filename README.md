# my-things-to-do
*Just a rambling list of projects and things for my personal record.*

# To-Read
- https://kentcdodds.com/blog/usememo-and-usecallback
- https://react.dev/reference/react/useRef
- https://meje.dev/blog/useref-not-queryselector
- https://overreacted.io/making-setinterval-declarative-with-react-hooks/
- https://github.com/reactjs/rfcs
- https://www.patterns.dev/
- https://www.sciencedirect.com/science/article/abs/pii/S016975529800110X <-Anatomy of a large scale search engine

# Programming
- Desktop(?) "AI" assistant to present websites etc that you add to a list of Bookmarks, keeping the website more fresh in mind. With Chrome Bookmarks etc I often bookmark and then forget and never see them again until I clean out bookmarks.
- Study useMemo
- Study useRef
- study useCallback
- Homepage blog with to watch/read schedule
- Deployed my React/Vite CV Building page at Netly (After a lot of errors...) => http://super-heavy-ballet.com/
- Expand Ready Go to ReactNative/Mobile Deployment
- Design AWA site
- Build AWA Site
- Deploy AWA Site
- Build Hangman guess word game using react
- Utilise call from API db of words
- Continue TOP
- Pub Crawler app - find nearby pubs and plan route from pub to pub
- Sports Club locator app:
- - Sport type, Club Location, Entry requirements, size, affiliations etc
  - Organise inter-club meet ups/competitions
- Think of some sort of topic organizer for Sport Computer Use, SWE Computer Use etc, focused study topics
- 
- Plan Ziva catalogue webpage <================================================ Current
- 
- Plan Ideation Database Webpage
- Read more into Embedded
- Update Algebra - in progress
- Update Calculus
- Learn Servers and REST

# Sports
- https://www.verkhoshansky.com/LinkClick.aspx?fileticket=ru7JCrUqraM%3D&tabid=80&mid=426
- Write script explaining the 'Conjugate Method' or more precisely, the components in programming/periodization behind them.
- Write script on Shock Method for upper body
- Write script "How To Get Brutally Strong for Armwrestling (Not for Beginners)"

# Video Game
Learn Basic 3d modelling via tutorials
*//Game Ideas:*
- Platformer from aesthetic https://youtu.be/41V29jdzuCI
- -^ Platformer, platforms as floating islands (ala Laputa) grassy top, rocky earth bottoms, add rocks etc falling from bottom on player landing/moving/jumping

# Reference Links
- https://youtu.be/H69whKzV3wQ <= Armoured Feet and shins
- https://youtu.be/MnVWTuGMBHw <= Armour in motion

# Make Youtube/IG Video downloader
- -- Chat GPT Description
- //////////////////////////////////////////////////////////////////////
- Sure! Here’s a high-level description of how a web application for retrieving and downloading video files from websites like YouTube works:

1. Frontend: User Interface
Input Field: The user interface includes an input field where users can paste the URL of the video they want to download.
Submit Button: A button to submit the URL.
Progress Indicator: An optional progress bar or loading indicator to show the status of the download.
Download Link: Once the video is processed, a link or button to download the video file.
2. Backend: Server-side Processing
Receive URL: The backend receives the video URL submitted by the user.
URL Validation: The server validates the URL to ensure it’s a valid video link from supported platforms like YouTube.
Video Retrieval: The backend uses a tool or library to retrieve the video file from the URL. Popular libraries for this purpose include youtube-dl or yt-dlp.
Video Processing (Optional): The server can convert the video to different formats or resolutions if needed.
Storage: The processed video file is temporarily stored on the server.
3. Downloading the Video
Generate Download Link: Once the video is ready, the server generates a download link.
Serve File: The server sends the file to the user when they click the download link.
4. Technologies and Tools
Frontend: HTML, CSS, JavaScript, and frameworks like React, Vue.js, or Angular for building the user interface.
Backend:
Programming Languages: Python, Node.js, or any other server-side language.
Libraries:
youtube-dl or yt-dlp for downloading videos.
Flask or Django for Python-based web applications.
Express for Node.js-based applications.
Storage: Temporary storage on the server or using cloud storage solutions.
Database (Optional): If you need to keep track of user activities, store URLs, or manage accounts, you might use a database like PostgreSQL, MySQL, or MongoDB.
5. Workflow
User Input: The user pastes the video URL into the input field and clicks the submit button.
Server Request: The frontend sends the URL to the backend via an HTTP request (usually a POST request).
Validation and Processing: The backend validates the URL and uses youtube-dl or similar tools to download the video.
Storage: The video file is temporarily stored on the server.
Download Link: The server responds with a download link for the user.
Download: The user clicks the link to download the video file to their device.
///////////////////////////////////////////////////////////////////////////////////////

