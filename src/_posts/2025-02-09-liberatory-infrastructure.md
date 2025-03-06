---
layout: post
date: '2025-02-09'
featured: false
images: []
videos: []
models: []
name: liberatory-infrastructure
display_name: ⛓️‍💥 Liberatory Infrastructure
title: Liberatory Infrastructure
date_created: '2025-02-09'
status: in_progress
priority: 0
tagline: Creating decentralized trust networks for mutual aid
description: Creating decentralized trust networks for mutual aid
feature_post: false
featured_content:
  type: image
  source: ''
  language: ''
  start_line: 0
  end_line: 0
tags:
- Systems
- Community
embeds: []
written_content: "# Concept\n\nA resilient mesh networking protocol designed to enable\
  \ trust-based coordination between devices. Each device stores messages and forms\
  \ a mesh network with other devices to facilitate matching and propagating messages\
  \ based on configurable trust relationships.\n\n## Key Tenets\n- **Local**: Built\
  \ on and enhances existing local trust networks to facilitate secure communication\
  \ and coordination\n- **Decentralized**: Infrastructure operates without central\
  \ providers or coordinators. All software is fully open-source. The protocol can\
  \ run on any device with necessary networking hardware support, including DIY devices\
  \ using compatible microcontrollers (e.g., ESP8266 or Nordic nrf52840)\n- **Private**:\
  \ Preserves anonymity and privacy of all parties through end-to-end encryption and\
  \ is resistant to surveillance/shutdown\n- **Resilient**: Functions without internet/cell\
  \ service through mesh networking\n- **Accessible**: Lightweight interface is easily\
  \ adaptable to meet accessibility needs, no phone required\n\n# Potential Applications\n\
  \n## Emergency Response & Disaster Recovery\n- Coordination during natural disasters\
  \ when traditional infrastructure is compromised\n- Emergency service coordination\
  \ with maintained chain of trust\n- Community organization during extended power/communication\
  \ outages\n- Message and resource coordination in areas with destroyed infrastructure\n\
  \n## Remote/Rural Communication Networks\n- Infrastructure for communities with\
  \ limited internet access\n- Local communication networks mapped to existing community\
  \ relationships\n- Coordination in areas with intermittent connectivity\n- Resource\
  \ and information sharing in remote regions\n\n## Civil Society & Community Resilience\n\
  - Maintaining communication during civil unrest or infrastructure disruption\n-\
  \ Coordinating community responses to environmental or health hazards\n- Organizing\
  \ remote/indigenous communities facing external pressures\n- Building resilient\
  \ community networks independent of central infrastructure\n\n## Humanitarian Operations\n\
  - Aid delivery coordination in areas with compromised infrastructure\n- Establishing\
  \ trusted communication channels in conflict zones\n- Verifying legitimate aid recipients\
  \ through trust chains\n- Coordinating resources in areas with limited connectivity\n\
  \nThe protocol is particularly valuable in scenarios requiring:\n1. Operation without\
  \ traditional communication infrastructure\n2. Strong trust verification mechanisms\n\
  3. Resistance to surveillance or disruption\n4. Digital mapping of existing community\
  \ trust networks\n5. Hardware flexibility and low resource requirements\n\n# Network\
  \ Messaging Protocol\n\nThis section describes the types of messages that devices\
  \ send.\n\n## Device Identity\nGenerated on device initialization:\n1. Generate\
  \ Ed25519 key pair\n2. Device ID = Blake3 hash of public key\n3. All messages signed\
  \ with private key\n4. Public key distributed during trust establishment\n\n## Network\
  \ Message Requirements and Limits\n\nMaximum total message size: 512KB\nMaximum\
  \ field sizes:\n- title: 200 characters\n- description: 2000 characters\n- reason:\
  \ 500 characters\n- ttl: 20 hops maximum\n\nAll string fields MUST use UTF-8 encoding\n\
  Binary data MUST be base64 encoded\nTimestamps MUST use ISO8601 UTC format\n\n##\
  \ Message Types\n\n### Trust Management\n\nTrust management messages are sent directly\
  \ to and from specific devices, not through entire mesh network.\n\n**Proposing\
  \ and Accepting Trust**\n\nThe first device proposes to establish trust. Devices\
  \ must be in physical proximity and able to connect via mesh for trust to be proposed\
  \ and subsequently accepted. Upon the second device accepting, public keys are exchanged\
  \ and a shared symmetric key is generated for future communication.\n\n**Revoking\
  \ Trust**\n\nAny device can revoke trust from an individual device at any time.\
  \ If abuse or a compromised device is suspected, this can be flagged during the\
  \ revoking process. For more details on how abuse or device compromise is handled,\
  \ refer to the Governance section.\n\n**Example Event Body**\n\n```json\n{\n\t\"\
  protocol_version\": \"1.0\",\n\t\"type\": \"TRUST_MANAGEMENT\",\n\t\"subtype\":\
  \ \"PROPOSE\", //| \"ACCEPT\" | \"REVOKE\"\n\t\"message_id\": \"uuid\",\n\t\"device_id\"\
  : \"blake3_hash\",\n\t\"target_device_id\": \"blake3_hash\",\n\t\"timestamp\": \"\
  ISO8601\",\n\t\"signature\": \"ed25519_signature\",\n\t\"payload\": {\n\t\t\"public_key\"\
  : \"ed25519_public_key\",\n\t\t\"shared_key_encrypted\": \"encrypted_symmetric_key\"\
  ,\n\t\t\"reason\": \"string\",           // Optional\n\t}\n}\n```\n\n### Posts\n\
  \n**Creation**\n\nPosts (offers and needs) are input through the Web UI served by\
  \ each device. When creating a post:\n1. Device generates key X and a random salt\
  \ S\n2. Encrypts sensitive details with (X + S)\n3. Encrypts X for each directly\
  \ trusted device using their shared keys\n4. Broadcasts the post\n\n- Encryption\
  \ algorithm: AES-256-GCM\n- Key derivation: HKDF-SHA256\n- Key X: 256-bit random\
  \ key\n- Salt S: 128-bit random value\n\n`encrypted_details` contains specific about\
  \ how the offer poster can fulfill the need; for example, providing a phone number,\
  \ email address, or payment details.\n\n**Propagation**\n\nPosts are broadcast to\
  \ the entire mesh network, regardless of trust status.\n\nWhen devices in the trust\
  \ chain receive the post (ie - they can match to a device_id with trust_chain marked\
  \ true listed in the network_path field) they will:\n1. Decrypt X using their shared\
  \ key with previous device\n2. Re-encrypt X for each of their trusted devices using\
  \ their shared keys\n3. Update encrypted_keys list with new entries\n4. Store post\
  \ locally for matching\n\nThis pre-distribution of encrypted keys through the trust\
  \ chain enables faster matching later.\n\n**Example Event Body**\n\n````json\n{\n\
  \t\"protocol_version\": \"1.0\",\n\t\"type\": \"POST\",\n\t\"message_id\": \"uuid\"\
  ,\n\t\"device_id\": \"blake3_hash\",\n\t\"timestamp\": \"ISO8601\",\n\t\"signature\"\
  : \"ed25519_signature\",\n\t\"ttl\": \"number\",\n\t\"network_path\": [\n\t\t{\n\
  \t\t\t\"device_id\": \"blake3_hash\",\n\t\t\t\"timestamp\": \"ISO8601\",\n\t\t\t\
  \"rssi\": -70,\n\t\t\t\"trust_chain\": true,\n\t\t\t\"trust_chain_key\": \"bytes\"\
  \n\t\t}\n\t],\n\t\"payload\": {\n\t\t\"post_id\": \"uuid\",\n\t\t\"post_type\":\
  \ \"OFFER\", // | \"NEED\"\n\t\t\"category\": \"string\",\n\t\t\"title\": \"string\"\
  ,\n\t\t\"description\": \"string\",\n\t\t\"expiry\": \"ISO8601\",\n\t\t\"encrypted_details\"\
  : \"bytes\",     // Encrypted with (X + S)\n\t}\n}\n````\n\n**Example Device Local\
  \ State - Created Post**\n\n````json\n{\n    \"post_id\": \"uuid\",\n    \"post_type\"\
  : \"OFFER\", //| \"NEED\",\n    \"status\": \"ACTIVE\", // | \"PENDING_MATCH\" |\
  \ \"MATCHED\" | \"COMPLETED\" | \"EXPIRED\" | \"CANCELLED\",\n    \"created_at\"\
  : \"ISO8601\",\n    \"encryption_key\": \"bytes\",  // Key X for this post\n   \
  \ \"salt\": \"bytes\",            // Salt S for this post, if it is a need\n   \
  \ \"content\":{\n    \t\"category\": \"string\",\n\t\t\"title\": \"string\",\n\t\
  \t\"description\": \"string\",\n\t\t\"expiry\": \"ISO8601\",\n    },\n    \"active_matches\"\
  : [         // Matches in progress\n        {\n            \"match_id\": \"uuid\"\
  ,\n            \"stage\": \"PROPOSED\", // | \"ACCEPTED\" | \"COMPLETED\",\n   \
  \         \"remote_post_id\": \"uuid\",\n            \"remote_device_id\": \"blake3_hash\"\
  \n\n        }\n    ],\n    \"completed_matches\": [      // Successfully completed\
  \ matches\n        {\n            \"match_id\": \"uuid\",\n            \"remote_post_id\"\
  : \"uuid\",\n            \"remote_device_id\": \"blake3_hash\",\n            \"\
  completed_at\": \"ISO8601\"\n        }\n    ]\n}\n````\n\n**Example Device State\
  \ - Remote Post (Stored Locally for Matching)**\n\n````json\n{\n    \"post_id\"\
  : \"uuid\",\n    \"post_type\": \"OFFER\", //| \"NEED\",\n    \"status\": \"ACTIVE\"\
  , // | \"MATCHED\" | \"COMPLETED\" | \"EXPIRED\",\n    \"first_seen\": \"ISO8601\"\
  ,\n    \"creator_device_id\": \"blake3_hash\",\n    \"encryption_key\": \"bytes\"\
  ,      // Key X if in trust chain\n    \"network_path\": [                 // Path\
  \ through which device received key\n        {\n            \"device_id\": \"blake3_hash\"\
  ,\n            \"received_at\": \"ISO8601\"\n        }\n    ],\n    \"content\"\
  :{\n    \t\"title\": \"string\",\n    \t\"category\": \"string\",\n    \t\"expiry\"\
  : \"ISO8601\",\n    \t\"encrypted_details\": \"bytes\"\n    }\n}\n````\n\n### Matches\n\
  \nWhen a device identifies a potential match between posts (matching category and\
  \ fuzzy matching titles), it first calculates a \"trust distance\" metric between\
  \ offer and need posts based on the characteristics of their trust chains. This\
  \ way, if an offer or need has multiple matches, this metric helps prioritize matches\
  \ where parties are \"closer\" in the trust network.\n\nIf the device has already\
  \ seen the post but it has reached them through a path with a shorter trust distance,\
  \ the locally-stored post is updated with the new trust distance.\n\nBoth the offer\
  \ and need poster will see proposed matches in their Web UI along with:\n- The the\
  \ trust distance\n- The post title, description, and expiry\n- Any of their trusted\
  \ devices which are in the trust chain\n\nAs matches progress from identification\
  \ to completion, messages relating to matches are broadcast to the entire mesh network.\n\
  \n**Trust Distance Calculation**\n\n```python\ndef calculate_trust_distance(offer_chain,\
  \ need_chain):\n\n\tif not offer_chain or not need_chain:\n        return float('inf')\n\
  \n\toffer_devices = set(device['device_id'] for device in network_path if trust_chain\
  \ == True)\n    need_devices = set(device['device_id'] for device in network_path\
  \  if trust_chain == True)\n    \n    # Calculate key metrics\n    shared_devices\
  \ = offer_devices.intersection(need_devices)\n    total_devices = offer_devices.union(need_devices)\n\
  \n    # Lower score = closer in trust network\n    score = (\n        # Base distance\
  \ from chain lengths\n        (len(offer_chain) + len(need_chain)) / 2 +\n     \
  \   # Penalty for lack of shared trusted devices\n        (5 - len(shared_devices))\
  \ * 1.5 +\n        # Small penalty for total network size involved\n        (len(total_devices)\
  \ / 10)\n    )\n    return max(1, score)  # Minimum score of 1\n```\n\n**Match Sequence**\n\
  \nMatches work as follows:\n\n1. `PROPOSED`: Matching device proposes match to both\
  \ parties\n2. Both the offer and the need poster will see potential matches in their\
  \ Web UI. \n\t- If the need poster accepts, they will transmit an `ACCEPTED` message\
  \ containing a salt which the offer poster can use to decrypt their `encrypted_details`.\
  \ \n\t- If the need poster does not accept, no message will be transmitted\n\t-\
  \ If the offer poster accepts, they will be able to receive the final salt to decrypt\
  \ the need poster's `encrypted_details`\n\t- If the offer poster does not accept,\
  \ their device will delete the encryption key X and no longer receive the final\
  \ salt\n3. `COMPLETED`: If both parties accept, then a final COMPLETED message is\
  \ transmitted. All parties involved in the trust chain and the need/offer poster\
  \ receive a token.\n\nThe decryption process:\n- Key X has been pre-distributed\
  \ through trust chain during post propagation\n- Salt is quickly shared through\
  \ public network upon match acceptance\n- Offer poster combines their version of\
  \ X with salt to decrypt details\n- No need to wait for sequential trust chain propagation\
  \ after match\n\nWhen match completes:\n- Both parties have access to the information\
  \ needed to fulfill the match\n - Offer is archived if fully used, otherwise continues\
  \ matching\n- All chain members receive reward tokens\n\n**Example Event Body**\n\
  \n```json\n{\n\t\"type\": \"MATCH\",\n\t\"message_id\": \"uuid\",\n\t\"device_id\"\
  : \"blake3_hash\",\n\t\"timestamp\": \"ISO8601\",\n\t\"ttl\": \"number\",\n\t\"\
  network_path\": [\n\t\t{\n\t\t\t\"device_id\": \"blake3_hash\",\n\t\t\t\"timestamp\"\
  : \"ISO8601\",\n\t\t\t\"rssi\": -70\n\t\t}\n\t],\n\t\"payload\": {\n\t\t\"stage\"\
  : \"PROPOSED\", //\"ACCEPTED\" | \"COMPLETED\" | \"FAILED\"\n\t\t\"match_id\": \"\
  uuid\",\n\t\t\"offer_id\": \"post_id from offer\",\n\t\t\"offer_device_id\": \"\
  device_id from offer post\",\n\t\t\"need_id\": \"post_id from need\",\n\t\t\"need_device_id\"\
  : \"device_id from need post\",\n\t\t\"trust_distance\": \"number\",\n\t\t\"salt\"\
  : \"bytes\",        // Added by need poster upon acceptance\n\t}\n}\n```\n\n\n#\
  \ Network Coordination\n\n## Device Capabilities\n\nDevices advertise their capabilities\
  \ and constraints:\n\n```json\n{\n    \"device_capabilities\": {\n        // How\
  \ the device participates in the network\n        \"availability\": {\n        \
  \    // CONSTRAINED: Device controls its own sleep/wake cycles (e.g., embedded device)\n\
  \            // UNCONSTRAINED: Device may enter background/terminate at any time\
  \ (e.g., phone app)\n            \"type\": \"CONSTRAINED\", // | \"UNCONSTRAINED\"\
  ,\n\n            // Whether device can schedule future wake times\n            //\
  \ Used to coordinate future message exchanges\n            \"can_schedule\": true,\n\
  \n            // How long device expects to remain active in seconds\n         \
  \   // null means unknown/indefinite\n            // Used for group formation and\
  \ transmission timing\n            \"typical_active_time\": \"number\", // | null,\n\
  \n            // Whether device can continue message processing in background\n\
  \            // Affects group formation and message routing strategies\n       \
  \     \"background_operation\": true\n        },\n\n        // Array of supported\
  \ network interfaces\n        // Device may support multiple types simultaneously\n\
  \        \"networking\": [{\n            // Physical network type\n            //\
  \ Affects protocol parameters and coordination strategy\n            \"type\": \"\
  BLE\", //| \"WIFI\" | \"LORA\",\n\n            // Maximum bytes that can be sent\
  \ in single transmission\n            // Used to calculate message fragmentation\
  \ and timing\n            \"max_payload_size\": \"number\",\n\n            // Expected\
  \ milliseconds for message round-trip\n            // Used to calculate group sizes\
  \ and transmission timing\n            \"typical_latency\": \"number\",\n\n    \
  \        // Maximum simultaneous device connections\n            // Used to determine\
  \ group size limits\n            \"concurrent_connections\": \"number\",\n\n   \
  \         // Whether transmission power can be adjusted\n            // Enables\
  \ power optimization if true\n            \"power_control\": true,\n\n         \
  \   // Whether signal strength measurement available\n            // Enables connection\
  \ quality optimization if true\n            \"rssi_available\": true\n        }],\n\
  \n        // Storage capabilities for message retention\n        \"storage\": {\n\
  \            // Whether storage persists across device restarts\n            //\
  \ Affects message routing and recovery strategies\n            \"persistent\": true,\n\
  \n            // Maximum bytes available for message storage\n            // Used\
  \ to manage message retention and forwarding\n            \"max_size\": \"number\"\
  \n        }\n    }\n}\n```\n\n## Resource Management\n\n### Power Management\n\n\
  For devices with power control capability:\n- Available power levels defined by\
  \ network type\n- Adjust based on connection quality and battery level\n- Monitor\
  \ message delivery success rate\n\nExample configuration:\n```json\n{\n    \"power_management\"\
  : {\n        \"adjustment_thresholds\": {\n            \"decrease\": -60,    //\
  \ If median signal strength higher\n            \"increase\": -80     // If median\
  \ signal strength lower\n        },\n        \"battery_thresholds\": {\n       \
  \     \"critical\": 0.15,   // Reduce power when below 15%\n            \"minimum\"\
  : 0.05     // Minimum operating level\n        }\n    }\n}\n```\n\n### Storage Management\n\
  \nStorage organized into priority tiers:\n\n1. Critical Storage:\n- Device identity\
  \ and keys\n- Trust relationships\n- Active matches\n\n2. Time-Sensitive Storage:\n\
  - Active posts (2 weeks retention)\n- Match proposals (48 hours retention)\n\n```json\n\
  {\n    \"retention_periods\": {\n        \"active_posts\": \"2w\",\n        \"match_proposals\"\
  : \"48h\"\n    },\n    \"cleanup_interval\": \"1h\"\n}\n```\n\n## Network Coordination\n\
  \n### Device Discovery\nWhen a device becomes active:\n\n1. Broadcast PRESENCE\n\
  2. Start discovery_timeout timer (30 seconds)\n3. Collect PRESENCE and BATCH_SUMMARY\
  \ responses\n4. After discovery_timeout, determine coordination strategy based on\
  \ number of active devices\n\n```json\n{\n    \"type\": \"PRESENCE\",\n    \"message_id\"\
  : \"uuid\",\n    \"device_id\": \"blake3_hash\",\n    \"timestamp\": \"ISO8601\"\
  ,\n    \"payload\": {\n        \"capabilities\": \"device_capabilities\",\n    \
  \    \"expected_duration\": \"number\", // | null,\n        \"background_operation\"\
  : true,\n        \"network_quality\": 0.8,\n        \"message_counts\": {\n    \
  \        \"to_send\": 5,\n            \"total_size\": 2048\n        },\n       \
  \ \"seen_devices\": [{\n            \"device_id\": \"blake3_hash\",\n          \
  \  \"last_seen\": \"ISO8601\",\n            \"can_relay\": true\n        }]\n  \
  \  }\n}\n```\n\n```json\n{\n    \"type\": \"BATCH_SUMMARY\",\n    \"message_id\"\
  : \"uuid\",\n    \"device_id\": \"blake3_hash\",\n    \"timestamp\": \"ISO8601\"\
  ,\n    \"payload\": {\n        \"known_messages\": {\n            \"messages\":\
  \ [\"message_id\"],\n            \"max_age\": \"3600\",\n            \"max_count\"\
  : 1000\n        },\n        \"visible_devices\": [\n            {\n            \
  \    \"device_id\": \"blake3_hash\",\n                \"network_quality\": 0.8,\n\
  \                \"last_received\": \"ISO8601\"\n            }\n        ]\n    }\n\
  }\n```\n\n### Message Exchange Coordination\n\nAfter 30-second discovery period,\
  \ devices coordinate based on number of active participants:\n\nThe approach is\
  \ determined by the number of active devices:\n\n#### Two to Four Devices\nUse single-group\
  \ coordination:\n- All devices in one group\n- Simple round-robin transmission order\n\
  - Token-based exchange without group overhead\n\n```json\n{\n    \"type\": \"TRANSMISSION_ORDER\"\
  ,\n    \"message_id\": \"uuid\",\n    \"timestamp\": \"ISO8601\",\n    \"payload\"\
  : {\n        \"devices\": [\"device_id\"],\n        \"token_timeout\": 30\n    }\n\
  }\n```\n\n#### Five or More Devices\n1. Calculate optimal group size based on:\n\
  - Device constraints\n- Message volumes\n- Network conditions\n- Connection quality\n\
  \n2. Form transmission groups:\n- Balance constrained/unconstrained devices\n- Consider\
  \ message distribution\n- Account for network quality\n\n3. Broadcast GROUP_ASSIGNMENT\
  \ (lowest device_id in each group):\n```json\n{\n    \"type\": \"GROUP_ASSIGNMENT\"\
  ,\n    \"message_id\": \"uuid\",\n    \"timestamp\": \"ISO8601\",\n    \"group_id\"\
  : \"number\",\n    \"payload\": {\n        \"group_size\": 8,\n        \"devices\"\
  : [\"device_id\"],\n        \"transmission_order\": [\"device_id\"],\n        \"\
  estimated_duration\": 300\n    }\n}\n```\n\n### Token-Based Transmission\n\nGroups\
  \ use token passing for transmission coordination:\n\n1. Initial token holder (first\
  \ in transmission_order) begins\n2. Each device broadcasts completion with next\
  \ token\n3. Process continues until all messages exchanged\n\n```json\n{\n    \"\
  type\": \"TRANSMISSION_TOKEN\",\n    \"message_id\": \"uuid\",\n    \"timestamp\"\
  : \"ISO8601\",\n    \"payload\": {\n        \"group_id\": 1,\n        \"next_device\"\
  : \"device_id\",\n        \"remaining_devices\": [\"device_id\"],\n        \"completion_status\"\
  : {\n            \"messages_exchanged\": 25,\n            \"devices_completed\"\
  : [\"device_id\"]\n        },\n        \"token_timeout\": 30\n    }\n}\n```\n\n\
  ### Device Departure\n\nDevices announce departure when possible:\n\n```json\n{\n\
  \    \"type\": \"DEPARTURE\",\n    \"message_id\": \"uuid\",\n    \"device_id\"\
  : \"blake3_hash\",\n    \"timestamp\": \"ISO8601\",\n    \"payload\": {\n      \
  \  \"reason\": \"SCHEDULED\" | \"BATTERY\" | \"USER_ACTION\",\n        \"group_id\"\
  : \"number\",\n        \"remaining_messages\": 5\n    }\n}\n```\n## Core Algorithms\n\
  \n### Forming Groups\n\n```python\ndef determine_coordination_strategy(active_devices):\n\
  \    \"\"\"\n    Determine appropriate coordination strategy based on number of\
  \ devices\n    \"\"\"\n    device_count = len(active_devices)\n    \n    if device_count\
  \ <= 2:\n        return {\n            \"type\": \"DIRECT_EXCHANGE\",\n        \
  \    \"devices\": list(active_devices)\n        }\n    elif device_count <= 4:\n\
  \        return {\n            \"type\": \"SINGLE_GROUP\",\n            \"transmission_order\"\
  : sorted(d.device_id for d in active_devices)\n        }\n    else:\n        group_size\
  \ = calculate_group_size(active_devices)\n        groups = form_transmission_groups(active_devices,\
  \ group_size)\n        return {\n            \"type\": \"MULTI_GROUP\",\n      \
  \      \"groups\": groups\n        }\n\ndef calculate_group_size(active_devices,\
  \ network_stats):\n    # Get device constraints\n    max_connections = min(d.capabilities.networking.concurrent_connections\
  \ \n                         for d in active_devices)\n    \n    # Calculate message\
  \ exchange needs\n    total_messages = sum(d.message_counts.to_send for d in active_devices)\n\
  \    avg_msg_size = sum(d.message_counts.total_size for d in active_devices) / total_messages\n\
  \    \n    # Time per exchange\n    exchange_time = (\n        min(d.capabilities.networking.typical_latency\
  \ for d in active_devices) * 2 +\n        (avg_msg_size / min(d.capabilities.networking.max_payload_size\
  \ \n                           for d in active_devices)) * 1.5\n    )\n    \n  \
  \  # Available time\n    available_time = min(d.expected_duration for d in active_devices\
  \ \n                        if d.expected_duration is not None) or 300\n    \n \
  \   # Calculate max size\n    max_by_time = available_time / (exchange_time * total_messages/len(active_devices))\n\
  \    \n    return min(\n        max_connections,\n        max_by_time * 0.8,\n \
  \       8\n    )\n\ndef form_transmission_groups(active_devices, group_size):\n\
  \    # Sort by capability and message load\n    devices = sorted(active_devices,\
  \ \n                    key=lambda d: (\n                        d.capabilities.availability.type\
  \ == \"UNCONSTRAINED\",\n                        d.message_counts.to_send,\n   \
  \                     d.network_quality\n                    ), reverse=True)\n\
  \    \n    groups = []\n    current_group = []\n    \n    for device in devices:\n\
  \        if len(current_group) >= group_size:\n            groups.append(current_group)\n\
  \            current_group = []\n        current_group.append(device)\n    \n  \
  \  if current_group:\n        groups.append(current_group)\n    \n    return groups\n\
  ```\n\n### Transmission Rotation\n\n\n```python\ndef handle_transmission_rotation(current_group,\
  \ device_id, message_queue):\n    \"\"\"\n    Manages message transmission rotation\
  \ within a group\n    \n    Args:\n        current_group (dict): Current group information\n\
  \        device_id (str): Current device ID\n        message_queue (Queue): Queue\
  \ of messages to transmit\n    \"\"\"\n    if not current_group or not current_group.get('transmission_order'):\n\
  \        raise ValueError(\"Invalid group configuration\")\n\n    transmission_order\
  \ = current_group['transmission_order']\n    current_position = transmission_order.index(device_id)\n\
  \    next_position = (current_position + 1) % len(transmission_order)\n    next_device\
  \ = transmission_order[next_position]\n    \n    token = {\n        \"type\": \"\
  TRANSMISSION_TOKEN\",\n        \"message_id\": str(uuid.uuid4()),\n        \"timestamp\"\
  : datetime.utcnow().isoformat(),\n        \"payload\": {\n            \"group_id\"\
  : current_group['group_id'],\n            \"next_device\": next_device,\n      \
  \      \"remaining_devices\": transmission_order,\n            \"completion_status\"\
  : {\n                \"messages_exchanged\": message_queue.completed_count,\n  \
  \              \"devices_completed\": message_queue.completed_devices\n        \
  \    },\n            \"token_timeout\": DEFAULT_CONFIG['network']['retry_delay']\n\
  \        }\n    }\n    \n    return token\n\ndef handle_token_timeout(current_token):\n\
  \    if time_since_last_transmission > current_token.token_timeout:\n        if\
  \ my_device_id == get_next_device(current_token):\n            broadcast_token(create_new_token())\n\
  \            \ndef get_next_device(token):\n    current_idx = token.remaining_devices.index(token.next_device)\n\
  \    next_idx = (current_idx + 1) % len(token.remaining_devices)\n    return token.remaining_devices[next_idx]\n\
  \ndef handle_direct_exchange(devices):\n    \"\"\"\n    Manage exchange between\
  \ two devices\n    - Simpler token passing\n    - No group overhead\n    - Continuous\
  \ exchange until complete\n    \"\"\"\n    pass\n\ndef handle_token_exchange(transmission_order):\n\
  \    \"\"\"\n    Manage round-robin exchange for 3-4 devices\n    - Single token\n\
  \    - Fixed transmission order\n    - Continue until all messages exchanged\n \
  \   \"\"\"\n    pass\n\ndef handle_group_exchange(groups):\n    \"\"\"\n    Manage\
  \ full group coordination for 5+ devices\n    - Multiple groups\n    - Complex token\
  \ passing\n    - Inter-group coordination\n    \"\"\"\n    pass\n```\n\n# Hardware\
  \ Implementation\n\nThis protocol can be implemented on any device with the necessary\
  \ networking hardware. It is designed with both mobile devices and purpose-built\
  \ hardware devices in mind, with the implementation differences primarily affecting\
  \ the Networking Coordination layer of the protocol.\n\n## Common Hardware Requirements\n\
  \n1. Networking radio; ie, Bluetooth Low-Energy (BLE)\n2. Peristent storage ie flash\
  \ memory\n\n## Mobile Phone Requirements & Implementation\n\nInterface: mobile app\
  \ serves local webpage\n\n## Dedicated Hardware Requirements & Implementation\n\n\
  Serves local web interface (Web UI) to any Bluetooth/NFC-enabled device\nCompatible\
  \ low-power microcontroller (e.g., ESP8266 or Nordic nrf52840)\nStatus LEDs\nBattery\
  \ and power management circuitry\n\n\n# Future\n\n- Governance\n\n\n# Governance\n\
  \n## Abuse Prevention\n\n### Rate Limiting\n1. Post Creation\n   - Maximum 2 posts\
  \ per week\n   - Maximum 5 active posts\n\n### Compromised Devices\n1. Requires\
  \ multiple trusted devices to confirm (threshold system)\n2. Revocation reasons\
  \ must be signed and distributed\n3. Time window enforced to prevent coordinated\
  \ attacks\n4. Optional rehabilitation period after timeout\n\n#### Reputation System\n\
  ```json\n{\n  \"reputation\": {\n    \"successful_matches\": 12,\n    \"trust_age\"\
  : \"2160h\",\n    \"reported_issues\": 0,\n    \"rate_limit_multiplier\": 1.5\n\
  \  }\n}\n```\n\n#### Content Protection\n1. Local blocklists for known bad content\n\
  2. Size and frequency anomaly detection\n3. Pattern matching for spam detection\n\
  4. Gradual permission increase for new devices\n\n# Future Considerations\n\n1.\
  \ Alternative Communication Methods\n   - LoRa integration for longer range\n  \
  \ - WiFi mesh capabilities\n   - NFC for close-range interaction\n\n2. Enhanced\
  \ Security Features\n   - Post encryption with attribute-based encryption\n   -\
  \ Anonymous credentials system\n   - Zero-knowledge proofs for reputation\n\n3.\
  \ Governance Implementation\n   - Distributed decision making\n   - Protocol upgrade\
  \ mechanism\n   - Community feedback system"
readme: ''
featured_image: /media/liberatory-infrastructure/
---
{% include post-content.html %}