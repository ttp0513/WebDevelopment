# 🎧 Record Collection Maintenance Function

##  Project Overview

This project involves building a utility function to manage a digital music album catalog. The catalog is structured as a JavaScript object, where each album is represented by a unique numeric ID. Each album contains metadata such as album title, artist name, and a list of tracks. Not all albums have complete information, so the function must handle updates flexibly and conditionally.

## Function Signature

```js
function updateRecords(records, id, prop, value)
```
## Parameters:
**records:** The full album collection object

**id:** The numeric identifier of the album to update

**prop:** The property name to update (e.g., "artist", "tracks")

**value:** The new value to assign, or an empty string to trigger deletion

##  Business Rules
1. The function must always return the entire records object after performing any update.

2. If value is an empty string, the specified prop should be deleted from the album.

3. If prop is not "tracks" and value is not empty, assign value directly to the album’s property.

4. If prop is "tracks" and the album does not yet have a tracks property, create an empty array and add value to it.

5. If prop is "tracks" and the property already exists, append value to the existing array.

## Constraints
The function must operate only on the records parameter and should not directly reference any external variables such as `recordCollection`.

The logic must be robust enough to handle incomplete data and avoid overwriting unrelated properties.