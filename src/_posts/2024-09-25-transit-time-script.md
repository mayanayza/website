---
layout: post
date: &id001 2024-09-25
featured: false
images: []
videos: []
models: []
name: transit-time-script
display_name: 🚲 Transit Time Script
title: Transit Time Script
date_created: *id001
status: complete
priority: 0
tagline: Automatic calendar blocking while you're going to be in-transit
description: null
feature_post: false
featured_content:
  type: code
  source: src/Code.gs
  language: javascript
  start_line: 50
  end_line: 75
tags:
- Systems
- Digital
embeds: []
website: https://maya.cloud/transit-time-script
github: https://github.com/mayanayza/transit-time-script
written_content: 'The only thing worse than being busy is being busy and double booked
  >:( !


  This script automatically calculates transit time between events on your calendar
  so that you won''t have people trying to set up meetings while you''re going to
  be on a bus, train, or in the car.'
readme: '# Setup


  1. Replace the following variables at the top of your script with actual values.
  Calendar IDs are available in the settings section of Google Calendar.

  ```javascript

  const SOURCE_CALENDAR_ID = ''INSERT PRIMARY CALENDAR ID''; // Your primary calendar
  ID

  const DESTINATION_CALENDAR_ID = ''INSERT DESTINATION CALENDAR ID''; // Replace with
  transit calendar ID

  const MAPS_API_KEY = ''INSERT MAPS API KEY''; // Replace with your Maps API key


  const HOME_ADDRESS = ''INSERT HOME ADDRESS''; // Replace with your home address

  ```


  2. Create a new Oauth scope in Google Cloud Platform to grant the script access
  to your calendar


  3. Create a new Apps Script project. Paste in the code with your variables inserted.


  4. Set up the following triggers

  - onDailyUpdate - Daily trigger

  - onCalendarUpdate - Calendar updated trigger'
featured_code: "    }\n  }\n}\n\nfunction removeTimedReminders(calendarId, eventId)\
  \ {\n  try {\n    // Fetch the event\n    const event = Calendar.Events.get(calendarId,\
  \ eventId);\n\n    if (event.reminders && event.reminders.overrides) {\n      //\
  \ Filter out timed reminders (e.g., \"popup\" or \"email\")\n      const updatedOverrides\
  \ = event.reminders.overrides.filter(reminder => reminder.method !== \"popup\");\n\
  \n      // Update the event's reminders\n      event.reminders.overrides = updatedOverrides;\n\
  \n      // Save changes\n      Calendar.Events.update(event, calendarId, eventId);\n\
  \      console.log(`Timed reminders removed for event: ${event.summary}`);\n   \
  \ } else {\n      console.log(\"No custom timed reminders to remove.\");\n    }\n\
  \  } catch (error) {\n    console.error(`Failed to update event reminders: ${error.message}`);\n\
  \  }\n"
code_language: javascript
---
{% include post-content.html %}