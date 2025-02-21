---
layout: post
title: Transit Time Script
tagline: Automatic calendar blocking while you're going to be in-transit
date: 2024-09-25
tags:
- Automation
- Tools
featured: false
gallery_images: []
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
  [View on GitHub](https://github.com/mayanayza/transit-time-script){:target="_blank"}

The only thing worse than being busy is being busy and double booked >:( !

This script automatically calculates transit time between events on your calendar so that you won't have people trying to set up meetings while you're going to be on a bus, train, or in the car.





<iframe frameborder="0" src="/media/monster/embeds/no-embed/monster-food.html" id="food-transit-time-script"></iframe>