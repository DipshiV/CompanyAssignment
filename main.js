//  function to update the avatar appearance
function updateAvatarModel(avatarData) {
    // Created a new material with the updated avatar colors
    const avatarMaterial = new THREE.MeshStandardMaterial({
      color: avatarData.hairColor,
    
    });
  
    //  avatar model is loaded as avatarModel
    avatarModel.traverse((child) => {
      if (child.isMesh) {
        child.material = avatarMaterial;
      }
    });
  }
  
  // function to fetch the personalized avatar data from ReadyPlayerMe API
  async function fetchAvatarData() {
    try {
      const response = await fetch('https://api.readyplayer.me/v1/avatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk_live_W0d-hly769oCZGzgm9FxDCjVJHkFZOAAH8OB', 
        },
        body: JSON.stringify({
          // Add avatar customization data here as required by the ReadyPlayerMe API
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch avatar data from the API');
      }
  
      const avatarData = await response.json();
      updateAvatarModel(avatarData);
    } catch (error) {
      console.error('Error fetching avatar data:', error);
    }
  }
  
  
  // fetchAvatarData();
  
  //  a button with the id "customizeButton" to trigger avatar customization
  const customizeButton = document.getElementById('customizeButton');
  customizeButton.addEventListener('click', fetchAvatarData);
  