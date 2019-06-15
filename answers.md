1. What is the purpose of using _sessions_?
Data persistance. In authentication it's useful because the data persisted can help verify client credentials without the need of the client constantly verifying it manually.

1. What does bcrypt do to help us store passwords in a secure manner.
It turns plain text in hashed text. Hashes are "irreversable" but verifiables, makes dictionary attacks mostly useless, and if the client data on this server is compromised it usually doesn't compromise their data on another server because they're lazy and use the same password everywhere.

1. What does bcrypt do to slow down attackers?
Salt. Salt hashes and rehashes text and that takes time. Anywhere from milliseconds to the end of time per password depending on the settings.

1. What are the three parts of the JSON Web Token?
header, payload, signature