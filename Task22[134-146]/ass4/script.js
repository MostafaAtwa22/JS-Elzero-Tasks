let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// http? => may be http or https
// :// => after the protocol
// (?:[-\w]+\.)? => may contains www.
// ([-\w]+) => letter or more
// \.\w+ => \. leter or more after this
// (?:\.\w+)? may have after it ? : and \. and then letter or more
// \/? may have /
// .* and the . and any thing after it