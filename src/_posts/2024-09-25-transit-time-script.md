---
layout: post
title: Transit Time Script
name: transit-time-script
tagline: Automatic calendar blocking while you're going to be in-transit
date: 2024-09-25
tags:
- Automation
- Tools
featured: false
images: []
videos: []
models: []
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
{% if project.github %}
  [View on GitHub]({{ project.github }}){:target="_blank"}
{% endif %}
{{ content }}
{% include iframe-embed.html iframe_embed=page.iframe_embeds %}
{% include gallery.html images=page.images %}
{% include video.html videos=page.videos %}
{% include model-viewer.html models=page.models %}
{% include monster-food.html id=page.name %}