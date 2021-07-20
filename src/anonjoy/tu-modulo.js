
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `anonjoy/tu-modulo`,
  author: `anonjoy`,
  version: `1.0.0`,
  config: {
    param1: `value`,
  },
  configDescriptions: {
    param1: `Description`,
  },
  dependencies: [`aut/otherPlugin1`],
  order: {
    'onPlayerChat': {
      'before': [`aut/otherPlugin1`, `aut/otherPlugin2`],
      'after': [`aut/otherPlugin3`],
    }
  },
  incompatible_with: [`aut/otherPlugin4`],
}
