var playlist = {evanessance: "save me"};
function updatePlaylist (playlist) {
  return playlist.assign ({}, 'evanessance', {[song]: 'save me'});
}
function removeFromPlaylist (playlist){
Delete playlist.evanessance
return playlist
}
