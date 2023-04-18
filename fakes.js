javascript: var config={
    "unitAmounts":{"spy":5},
    "coords":"518|334 516|336 516|333 517|336 517|333 517|334 510|337 480|259 514|330 521|336 519|336 519|328 515|328 517|331 521|332 518|329 481|254 480|256 477|260 479|259 513|340 482|256 510|325 514|337 481|258 522|333 523|332 519|340 522|331 523|334 520|331 519|339 482|259 528|345 488|334 479|257 520|340 521|327 521|326 488|252 481|250 523|338 485|253 484|257 476|264 477|263 486|251 483|249 479|256 481|255 480|262 491|255 479|261 476|263",
    "sendMode":"random"
}; 

function randomFakeScript(unitAmounts, coords){ 
    var coord = coords.split(' '); 
    var coordSplit = coord[Math.floor(Math.random() * coord.length)].split('|');
    document.forms[0].x.value = coordSplit[0]; 
    document.forms[0].y.value = coordSplit[1]; 
    jQuery('input[class=unitsInput]').val(0); 
    var count; 
    for (var unit in unitAmounts) {
         if (unitAmounts.hasOwnProperty(unit)) {
             if (unitAmounts[unit] > 0 && typeof document.forms[0][unit] != 'undefined') {
                 count = parseInt(document.forms[0][unit].nextSibling.nextSibling.innerHTML.match(/\d+/));
                  if (count > 0 && unitAmounts[unit] < count)
                   { document.forms[0][unit].value = Math.min(unitAmounts[unit], count);
                } 
            } 
        } 
    } 
} 
    if (game_data.screen === 'place' && game_data.mode === null) { const { unitAmounts, coords } = config; randomFakeScript(unitAmounts, coords); } else { UI.InfoMessage('Redirecting...'); setTimeout(function () { window.location.assign(game_data.link_base_pure + 'place'); }, 500); }