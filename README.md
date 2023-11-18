## Live Hosted Link - https://terribly-tiny-tales-profile.netlify.app/

## 1. **App Component**

File: `App.js`

The `App` component serves as the main entry point for your application. It orchestrates the following components:

- **Header**: Displays the application's header, including a logo and navigation button.
- **Profile**: Renders user profile information, such as background image, profile picture, and statistics.
- **PostsTop**: A simple component indicating the total number of posts.
- **Posts**: Displays a list of posts using the `SinglePost` component.

## 2. **Header Component**

File: `Header.js`

The `Header` component represents the application's header. It consists of a logo, the text "STORIES," and a button labeled "Courses."

## 3. **Profile Component**

File: `Profile.js`

The `Profile` component showcases user-specific details, including a background image, profile picture, user statistics (followers, following), professional information, and engagement metrics.

## 4. **PostsTop Component**

File: `PostsTop.js`

A straightforward component that reveals the total number of posts. It's positioned at the top of the posts section.

## 5. **Posts Component**

File: `Posts.js`

The `Posts` component is responsible for rendering a list of posts. It utilizes the `SinglePost` component to present individual posts with titles, descriptions, creators, and timestamps.

## 6. **SinglePost Component**

File: `SinglePost.js`

The `SinglePost` component represents an individual post, featuring a title, description, creator information, timestamp, and a thumb-up icon for engagement. Each post is enclosed within a container for consistent styling.
