import React from 'react';

function SocialsList({ social }) {
    switch(social){

    }
  return (
    <div>
      {crew.map((social, index) => (
        <div key={index}>
            <h2>{social}</h2><p>{blackshirt.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default SocialsList;



function generateSocialMediaLinks(accounts) {
    // Define an object to map social networks to their corresponding Font Awesome icons
    const socialIcons = {
      facebook: 'fab fa-facebook-f',
      twitter: 'fab fa-twitter',
      instagram: 'fab fa-instagram',
      linkedin: 'fab fa-linkedin',
      // Add more social networks and their icons as needed
    };
  
    // Create an empty array to store the generated HTML links
    const links = [];
  
    // Iterate through each account object in the input array
    for (const account of accounts) {
      const { socialNetwork, username } = account;
  
      // Check if the social network is supported and has an associated icon
      if (socialIcons.hasOwnProperty(socialNetwork)) {
        // Generate the Font Awesome icon tag
        const icon = `<i class="${socialIcons[socialNetwork]}"></i>`;
  
        // Generate the link tag
        const link = `<a href="${generateSocialMediaLink(socialNetwork, username)}">${icon}</a>`;
  
        // Push the link to the links array
        links.push(link);
      } else {
        console.warn(`Social network "${socialNetwork}" is not supported or has no associated icon.`);
      }
    }
  
    // Join all the links together and return as a single string
    return links.join(' ');
  }
  
  // Helper function to generate the link for each social network
  function generateSocialMediaLink(socialNetwork, username) {
    // Define the base URLs for each social network (you can customize these URLs)
    const baseUrls = {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/in/',
      // Add more social networks and their URLs as needed
    };
  
    // Check if the social network is supported and has an associated base URL
    if (baseUrls.hasOwnProperty(socialNetwork)) {
      // Combine the base URL with the username to generate the full link
      return `${baseUrls[socialNetwork]}${username}`;
    } else {
      console.error(`Social network "${socialNetwork}" is not supported or has no associated link.`);
      return '#'; // Return a fallback link if the social network is not supported
    }
  }