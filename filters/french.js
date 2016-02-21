var util = require("../lib/util");
var regex = util.regex;
var track = util.track;

track("végétalien", "vegan");

module.exports = [
    regex( "Je deviens (végétalien|vegan)" ),
    regex( "je vais (devenir|être) (végétalien|vegan)" ),
    regex( "je veux( bien)? (devenir|être) (végétalien|vegan)" ),
    regex( "je veux (devenir|être)( totalement)? (végétalien|vegan)" ),
    regex( "je suis( vraiment)? motivé à (devenir|être) (végétalien|vegan)" ),
    regex( "J'aimerais (devenir|être) (végétalien|vegan)" )
]