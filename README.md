
## Features

* **Smooth Animation:** Smooth page scroll and scroll trigger animation.
* **Smooth Page Transition:** Smooth page transition with prefetching feature of next js.
* **Dynamic Data:** Read the project data from JSON file instead of directly implemented the data.
* **Intelliticks chat widget:** Chat with owner of the web realtime.
* **Spotify realtime widget:** Show what song youre playing in this web.

## Installation

1. Ensure you have [pnpm](https://pnpm.io/) installed. If not, you can install it using:

   ```shell
   npm install -g pnpm
   ```
2. Clone the repository:

   ```shell
   git clone https://github.com/Alvalens/Alvalens-porto-2-nextJs.git
   ```
3. Navigate to the project directory:

   ```shell
   cd Alvalens-porto-2-nextJs
   ```
4. Install dependencies:

   ```
   pnpm install
   ```
5. Start the development server

   ```shell
   pnpm next dev
   ```
6. Update the Intelliticks chat widget script in components/Chat.jsx, with your own

   ```javascript
    "use client"
    import { useEffect } from "react";

    // Component for Intelliticks chat widget
    const Chat = () => {
    	useEffect(() => {
    		// Replace the Intelliticks script here

    	}, []);

    	return null;
    };

    export default Chat;
   ```
7. Set env.local by copying env.example and fill the variable

   ```
   NEXT_PUBLIC_SPOTIFY_CLIENT_ID=
   NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=
   NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN=
   ```

