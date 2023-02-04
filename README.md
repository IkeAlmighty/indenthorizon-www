# Related Repositories

- [SvelteKit Game Client](https://github.com/ikealmighty/indenthorizon-www)
- [NodeJS Shard Implementation](https://github.com/ikealmighty/indenthorizon-shard)
- [Untrusted Code Server](https://github.com/ikealmighty/indenthorizon-codebox)

# Indent Horizon SvelteKit Code Editor/Client

## What is Indent Horizon?

Indent Horizon aims to be a massively multiplayer spaceship coding game. The game strives to be fun for both veteran computer programmers **and also** beginners.

The project as a whole is a work in progress. This repository will contain an implementation of the game client written with SvelteKit.

## Game Design

### Concept

Players program individual "ship programs" that command spaceships. Spaceships can mine resources, explore solar systems (each shard usually represents a single solar system), trade with other ships, attack other spaceships, send messages to ships within a range, build new ships, upgrade equipment, and do "research" on raw materials mined throughout the game.

## Architecture

Indent Horizon Architecture consists of 3 distinct parts:

- **_Shards_**, aka servers, that host game data and consume 'actions' written in JSON.
- **_Codeboxes_**, that run player written ship programs that send actions to shards via websockets.
- **_Clients_**, that serve as the frontend for codeboxes and display player related data and 'action' responses.
