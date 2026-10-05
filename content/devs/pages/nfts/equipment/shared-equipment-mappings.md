> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/equipment/shared-equipment-mappings.md).

# Shared Equipment Mappings

All three equipment contracts share the following mappings.

## Mappings

### Rarity

```json
{
    0: "Common",
    2: "Rare",
    4: "Mythic",
    10: "Premium Visage",
    11: "Promotional Visage",
    12: "Creator Visage"
}
```

### CraftedBy

The `craftedBy` field contains a Hero ID for items that were crafting, or one of the following mappings for item drops and other sources:

```json
{
    "9000000000000": "The Gods", // Testing
    "9000000000001": "Visage Merchant",	// Direct Offer
    "9000000000002": "Tiltproof Tuesday", // Community Promo
    "9000000000003": "Karate Combat Promo", // Direct Offer
    "9000000000005": "Doug Hype Promo", // Direct Offer
    "9000000000004": "Yellow Panther Promo", // Direct Offer
    "9000000000005": "Doug Hype Promo", // Direct Offer
    "9000000000006": "Big Red Promo", // Direct Offer
    "9000000000007": "Hercules Promo", // Direct Offer
    "9000000000008": "Metis Promo", // Direct Offer
    "9000000001000": "Vithraven (Crystalvale) Blacksmith", // Direct Offer
    "9000000002000": "Transcendence Beginnings Event", // Raffle
    "9000000010000": "Kingdom Builder Promo", // Kingdom Builders
    "9000000020000": "Void Hunt - Mad Boar", // Hunts
    "9000000020001": "Mad Boar - 2023 Halloween Event", // Hunts
    "9000000020002": "Mad Boar - 2023 Winter Event", // Hunts
    "9000000020020": "Void Hunt - Bad Motherclucker", // Hunts
    "9000000028000": "Void Hunt - 2024 Lunar New Year Event", // Hunts
    "9000000028001": "Void Hunt - 2024 Gaia's Song Event", // Hunts
    "9000000028002": "Void Hunt - 2024 Summer Event", // Hunts
    "9000000028003": "Void Hunt - DFK Third Birthday Event", // Hunts
    "9000000028004": "Void Hunt - 2024 Halloween Event", // Hunts
    "9000000028005": "Void Hunt - 2025 Gaia's Song Event", // Hunts
    "9000000030000": "DFK Duel S6 Rank Rewards", // DFK Duel
    "9000000030001": "DFK Duel S6 Champion Rewards", // DFK Duel
    "9000000030002": "DFK Duel S6 Top Champion Rewards", // DFK Duel
    "9000000030007": "DFK Duel S7 Rank Rewards", // DFK Duel
    "9000000030008": "DFK Duel S8 Rank Rewards", // DFK Duel
    "9000000030009": "DFK Duel S9 Rank Rewards", // DFK Duel
    "9000000030010": "DFK Duel S10 Rank Rewards", // DFK Duel
    "9000000030011": "DFK Duel S11 Rank Rewards", // DFK Duel
    "9000000030012": "DFK Duel S12 Rank Rewards", // DFK Duel
    "9000000031007": "DFK Duel S7 Champion Rewards", // DFK Duel
    "9000000031008": "DFK Duel S8 Champion Rewards", // DFK Duel
    "9000000031009": "DFK Duel S9 Champion Rewards", // DFK Duel
    "9000000031010": "DFK Duel S10 Champion Rewards", // DFK Duel
    "9000000031011": "DFK Duel S11 Champion Rewards", // DFK Duel
    "9000000031012": "DFK Duel S12 Champion Rewards", // DFK Duel
    "9000000032007": "DFK Duel S7 Top Champion Rewards", // DFK Duel
    "9000000032008": "DFK Duel S8 Top Champion Rewards", // DFK Duel
    "9000000032009": "DFK Duel S9 Top Champion Rewards", // DFK Duel
    "9000000032010": "DFK Duel S10 Top Champion Rewards", // DFK Duel
    "9000000032011": "DFK Duel S11 Top Champion Rewards", // DFK Duel
    "9000000032012": "DFK Duel S12 Top Champion Rewards", // DFK Duel
    "9000000040000": "xJEWEL Raffle", // Airdrop
    "9000000040001": "Level Up Raffle", // Airdrop
    "9000000040002": "Second Birthday Event", // Airdrop
    "9000000040003": "Void Hunt Veteran Reward", // Airdrop
    "9000000050001": "Submersia Patrol", // Patrols
    "9000000051002": "YGG GAP Season 9 Premium Quest", // Event
    "9000000051003": "Tournament Participation Reward", // Tournaments
    "9000000060001": "Submersian Chest", // Treasure Chest
    "9000000060002": "Gilded Chest", // Treasure Chest
    "9000000060003": "Coral Chest", // Treasure Chest
    "9000000060004": "Sunken Chest", // Treasure Chest
    "9000000060005": "Banded Chest", // Treasure Chest
    "9000000060006": "Lost Chest", // Treasure Chest
    "9000000060007": "Stone Chest" // Treasure Chest
}
```

### Dye1

```json
{
    1: "#847d7d",
    2: "#df5121",
    3: "#dfad21",
    4: "#8abf1a",
    5: "#20b28c",
    6: "#1c8dd6",
    7: "#a92de3",
    8: "#d9d1d1",
    9: "#474b55",
    10: "#a24b20"
}
```

### Dye2

```json
{
    1: "#855b3c",
    2: "#a35241",
    3: "#9a7d4a",
    4: "#5e6d3f",
    5: "#4b7775",
    6: "#446689",
    7: "#704e7f",
    8: "#9da9c5",
    9: "#282423",
    10: "#a24b20"
}
```
