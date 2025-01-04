



![nasanotion](https://github.com/user-attachments/assets/f5e65cb8-48c0-4dc0-b757-bf3569f32d2f)

# NeoMa Earth Detection Project

NeoMa Earth Detection is an interactive tool that leverages NASA's Near-Earth Object (NEO) API to track and display the real-time locations of asteroids and comets that are near Earth. This project is designed to provide users with up-to-date information on the movement of celestial objects and their proximity to our planet, helping raise awareness about potential impacts and deepening our understanding of space. The project visualizes the data on an interactive map, allowing users to explore various objects, their trajectories, and other key details.

## Team Members
Solely me
## Product Walkthrough
Here is the link to demo video [Demo Video](https://drive.google.com/file/d/1dlHVB51UQFnFpamG4iRifZrS97z6NLqn/view?usp=sharing)

## How It Works?

1. **Real-Time Data Fetching**: The project fetches real-time data from NASA's Near-Earth Object API. This API provides detailed information about asteroids, comets, and other celestial objects near Earth.
   
2. **Data Visualization**: The fetched data is processed and visualized on an interactive map, displaying the position of each object in real-time, with updated details such as speed, size, and proximity to Earth.

3. **User Interaction**: Users can interact with the map, click on objects to get more information, and explore the trajectories of these objects in detail.

4. **Embed Video of Project Demo**: You can watch the demo video to see how the app functions in action.
   ![Project Demo](https://github.com/diyapratheep/Neoma/blob/main/demo%20gif/demo%20video.gif)



## Libraries Used
- **Leaflet.js** - for interactive maps
- **React** - as frontend frameworks
- **NASA NeoW API** - get from [here](https://api.nasa.gov/)


## How to Configure

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/diyapratheep/Neoma.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Neoma
   ```

3. Create a `.env` file in the root directory and add your **NASA API Key**:
   ```
   NEO_API_KEY=your-api-key-here
   ```

4. Install the required dependencies:
   ```bash
   npm install
   ```

## How to Run

1. After configuring the project, run the application with the following command:
   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:5173/` to see the project in action.

---
