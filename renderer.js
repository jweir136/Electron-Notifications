/**
 * Is used to determine if the user's electron browser has WebRTC enabled.
 * @returns `true` if WebRTC can be used, `false` otherwise.
 */
function hasGetUserMedia()
{
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}