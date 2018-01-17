var playlist = {
  wean: "Ocean man"
}

function updatePlaylist(playlist, name, title){
  return Object.assign({}, playlist, {[name]: title})
}
