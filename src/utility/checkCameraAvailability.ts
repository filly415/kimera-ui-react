const checkCameraAvailability = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(device => device.kind === 'videoinput');
    if (cameras.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

export default checkCameraAvailability;