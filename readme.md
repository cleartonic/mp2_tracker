# MP2 Echoes Tracker

Custom MP2 tracker with log & notes system  
Commands allow for tracking items with shorthand 


## Tracker available here
<a href="https://cleartonic.net/mp2_tracker" target="_blank">https://cleartonic.net/mp2_tracker</a>

## Shorthand / Aliases
<a href="https://pastebin.com/q0NtHrvD" target="_blank">Link to aliases</a>
## Commands

### GET
`get [item] [area]`  Track an item. Optional- add a location.  

`[item]` must match aliases. Most are intuitive.  
Light Beam is `lightbeam`, `light_beam` or `light`. Boost Ball is `boost`.  

`[area]` can either match aliases for the log, or can be custom  
`torvus` will show Torvus Bog in the log.   
`battleground` will not be an alias match, and will show "battleground" in the log

Examples:  
`get bomb` Tracks getting Morph Ball Bomb  
`get bombs agon` Tracks getting the Morph Ball Bomb from Agon Wastes  
`get ing dark_torvus` Tracks getting a Ing Hive key from Dark Torvus  

### KEYS

`keys [area_needing_keys] [area_with_key1] [area_with_key2] [area_with_key3]` Used to track the hint that tells the player where the 3 keys are for each main Dark area

Examples:  
`keys agon dark_torvus sanctuary sky_temple` will add "Agon Wastes keys: Dark Torvus, Sanctuary, Sky Temple Grounds" to the log  
`keys dark_torvus dark_agon temple_grounds ing_hive` will add "Dark Torvus keys: Dark Agon, Temple Grounds, Ing Hive" to the log

### STK

`stk [num] [area_with_key] [optional_room]` Used to track Sky Temple Keys ("stk") with their numbers and areas

Examples:  
`stk 3 dark_agon` will add "Sky Temple Key #3 in Dark Agon" to the log  
`stk 7 torvus great bridge` will add "Sky Temple Key #7 in Torvus Bog - great bridge" to the log



### DEFAULT

`[anything]` Add note to tracker

