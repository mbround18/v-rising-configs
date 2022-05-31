import createFieldSetAsBoolean from "../utils/createFieldSetAsBoolean";
import createFieldSetMultiInput from "../utils/createFieldSetMultiInput";
import createFieldSetSingleInput from "../utils/createFieldSetSingleInput";
import createFieldSetWithOptions from "../utils/createFieldSetWithOptions";

document.getElementById("config").innerHTML = ``;
export const multiOptions = {
  GameModeType: {
    PvP: "Defines basics for PvP Gamemode.",
    PvE: "Defines basics for PvE Gamemode.",
  },
  TimeZone: {
    UTC: "UTC",
    PST: "PST (Pacific Standard Time, UTC -8)",
    CET: "CET (Central European Time, UTC +1)",
    CST: "CST (China Standard Time, UTC +6)",
  },
  CastleDamageMode: {
    Never: "Players may never deal damage to enemy castle structures.",
    Always: "Players may always deal damage to enemy castle structures.",
    TimeRestricted:
      "Players may only damage enemy castle structures during certain real-time frames.",
  },
  SiegeWeaponHealth: {
    VeryLow: "Siege weapons have very low health @ 500hp.",
    Low: "Siege weapons have low health @ 1000hp.",
    Normal: "Siege weapons have medium health @ 1500hp.",
    High: "Siege weapons have high health @ 2000hp.",
    VeryHigh: "Siege weapons have very high health @ 2500hp.",
  },
  PlayerDamageMode: {
    Always: "Players may always deal damage to enemy players.",
    TimeRestricted:
      "Players may only damage enemy players during certain real-time frames.",
  },
  PvPProtectionMode: {
    Disabled: "PvP protection is disabled, lasts for 0 seconds.",
    VeryShort: "PvP protection is enabled, but lasts for 900 seconds.",
    Short: "PvP protection is enabled, but lasts for 1800 seconds.",
    Medium: "PvP protection is enabled, but lasts for 3600 seconds.",
    Long: "PvP protection is enabled, but lasts for 7200 seconds.",
  },
  DeathContainerPermission: {
    Anyone: "Anyone can open death containers.",
    ClanMembers: "Only clan members can open death containers.",
    OnlySelf: "Only the owner can open their death containers.",
  },
  RelicSpawnType: {
    Unique:
      "Soul shards are unique - only one of each type may exist at a time on the server.",
    Plentiful:
      "Soul shards are plentiful - a new one is dropped everytime a soul shard boss is slain.",
  },
};

// GameModeType
createFieldSetWithOptions("GameModeType", multiOptions.GameModeType);

// TimeZone
createFieldSetWithOptions("TimeZone", multiOptions.TimeZone);

// CastleDamageMode
createFieldSetWithOptions("CastleDamageMode", multiOptions.CastleDamageMode, {
  value: 1,
});

// SiegeWeaponHealth
createFieldSetWithOptions("SiegeWeaponHealth", multiOptions.SiegeWeaponHealth, {
  value: 2,
});

// PlayerDamageMode
createFieldSetWithOptions("PlayerDamageMode", multiOptions.PlayerDamageMode, {
  value: 0,
});

// PvPProtectionMode
createFieldSetWithOptions("PvPProtectionMode", multiOptions.PvPProtectionMode, {
  value: 2,
  desc: "The duration where players cannot be damage by other players when joining a PvP server in seconds.",
});

// DeathContainerPermission
createFieldSetWithOptions(
  "DeathContainerPermission",
  multiOptions.DeathContainerPermission,
  {
    value: 0,
    desc: "The permission level for opening death containers.",
  }
);

// RelicSpawnType
createFieldSetWithOptions("RelicSpawnType", multiOptions.RelicSpawnType, {
  value: 0,
  desc: "Defines if soul shard items are unique (only one of each per server) or if a new one spawn everytime a soul shard boss is slain.",
});

// CanLootEnemyContainers
createFieldSetAsBoolean("CanLootEnemyContainers", {
  value: true,
  desc: "If enabled, players may loot enemy stashes, containers, and crafting stations.",
});

// BloodBoundEquipment
createFieldSetAsBoolean("BloodBoundEquipment", {
  value: true,
  desc: "If enabled, players may equip items that are bound to their blood and will not drop on death.",
});

// TeleportBoundItems
createFieldSetAsBoolean("TeleportBoundItems", {
  value: true,
  desc: "If enabled, players may not teleport with a variety if items that are not bound to their blood. (e.g. crafting materials, some loot, etc.)",
});

// AllowGlobalChat
createFieldSetAsBoolean("AllowGlobalChat", {
  value: true,
  desc: "If enabled, allow players to write messages that all players on the server can read.",
});

// AllWaypointsUnlocked
createFieldSetAsBoolean("AllWaypointsUnlocked", {
  value: false,
  disabled: true,
  desc: "Do NOT change this it does not work and breaks the game atm.",
});

// FreeCastleClaim
createFieldSetAsBoolean("FreeCastleClaim", {
  value: false,
  desc: "If enabled, seizing an enemy player castle heart requires no materials.",
});

// FreeCastleDestroy
createFieldSetAsBoolean("FreeCastleDestroy", {
  value: false,
  desc: "If enabled, destroying an enemy player castle heart requires no materials.",
});

// InactivityKillEnabled
createFieldSetAsBoolean("InactivityKillEnabled", {
  value: true,
  desc: "If enabled, inactive players will parish after a certain amount of time.",
});

// InactivityKillSettings
createFieldSetMultiInput("InactivityKillSettings", [
  {
    id: "InactivityKillTimeMin",
    type: "number",
    value: 3600,
    desc: "Minimum timer before inactive player is killed in seconds based on gear level",
  },
  {
    id: "InactivityKillTimeMax",
    type: "number",
    value: 604800,
    disabled: true,
    desc: "Maximum timer before inactive player is killed in seconds based on gear level",
  },
  {
    id: "InactivityKillSafeTimeAddition",
    type: "number",
    value: 172800,
    disabled: true,
    desc: "Additional time to add to the timer before inactive player is killed in seconds when standing in a castle terratory",
  },
  {
    id: "InactivityKillTimerMaxItemLevel",
    type: "number",
    value: 84,
    disabled: true,
    desc: "The maximum gear level that the inactivity min and max timers are based on from 1 - this value",
  },
]);

// DisableDisconnectedDeadEnabled
createFieldSetAsBoolean("DisableDisconnectedDeadEnabled", {
  value: true,
  desc: "If enabled, timer to when dead disconnected players will be disabled.",
});

// DisableDisconnectedDeadTimer
createFieldSetSingleInput("DisableDisconnectedDeadTimer", {
  value: 60,
  type: "number",
  desc: "The time for a disconnected dead player to become disabled in seconds.",
});

// InventoryStacksModifier
createFieldSetSingleInput("InventoryStacksModifier", {
  value: 1,
  type: "number",
  desc: "The modifier for the maximum stack size of items in the inventory.",
});

// DropTableModifier
createFieldSetMultiInput("DropTableModifiers", [
  {
    id: "DropTableModifier_General",
    type: "number",
    value: 1,
    desc: "Multiplies all droptables with this factor granting more or less drops from kills and chests.",
  },
  {
    id: "DropTableModifier_Missions",
    type: "number",
    value: 1,
    desc: "Multiplies the amount of loot received from successful servant hunts.",
  },
]);

// MaterialYieldModifier_Global
createFieldSetSingleInput("MaterialYieldModifier_Global", {
  value: 1,
  type: "number",
  desc: "Mulitiplies the amount of materials received from harvesting resource nodes.",
});

// BloodEssenceYieldModifier
createFieldSetSingleInput("BloodEssenceYieldModifier", {
  value: 1,
  type: "number",
  desc: "Multiplies the amount of blood essence received from defeating enemies.",
});

// JournalVBloodSourceUnitMaxDistance
createFieldSetSingleInput("JournalVBloodSourceUnitMaxDistance", {
  value: 25,
  type: "number",
  disabled: true,
  desc: "NOT USED.",
});

// PvPVampireRespawnModifier
createFieldSetSingleInput("PvPVampireRespawnModifier", {
  value: 1,
  type: "number",
  desc: "Multiplies the additional respawn duration players suffer from being slain in PvP..",
});

// CastleMinimumDistanceInFloors
createFieldSetSingleInput("CastleMinimumDistanceInFloors", {
  value: 2,
  type: "number",
  desc: "The number of minimum tiles where placers can place a castle heart and/or floors next to another heart.",
});

// ClanSize
createFieldSetSingleInput("ClanSize", {
  value: 10,
  type: "number",
  desc: "The maximum number of players in a clan.",
});

// DrainModifiers
createFieldSetMultiInput("DrainModifiers", [
  {
    id: "BloodDrainModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the amount of blood drained from players. Higher number means quicker rate of consumption.",
  },
  {
    id: "DurabilityDrainModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the amount of durability suffered from dealing or receiving damage..",
  },
]);

// AreaStrengthModifiers
createFieldSetMultiInput("AreaStrengthModifiers", [
  {
    id: "GarlicAreaStrengthModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the strength of garlic areas.",
  },
  {
    id: "HolyAreaStrengthModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the strength of holy areas.",
  },
  {
    id: "SilverStrengthModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the strength of silver areas.",
  },
]);

// SunDamageModifier
createFieldSetSingleInput("SunDamageModifier", {
  value: 1,
  type: "number",
  desc: "Multiplies the amount of damage taken from the sun.",
});

// CastleSettings
createFieldSetMultiInput("CastleSettings", [
  {
    id: "CastleDecayRateModifier",
    value: 1,
    type: "number",
    desc: "Rate for how quickly a castle deteriorate when the castle heart has run out of Blood Essence.",
  },
  {
    id: "CastleBloodEssenceDrainModifier",
    value: 1,
    type: "number",
    desc: "Rate for how quickly a castle consumes blood essence. A higher rate results in higher blood essence consumption.",
  },
  {
    id: "CastleSiegeTimer",
    value: 420, // nice
    type: "number",
    desc: "The amount of time a castle is deemed as breached when enemy players breaks through the outer defenses. Players may not construct new structures or walls while a castle is breached and all structures are susceptible to damage while in this state. Time is defined in seconds.",
  },
  {
    id: "CastleUnderAttackTimer",
    value: 60,
    type: "number",
    desc: "The amount of time where players are blocked from building structures or walls while being under attack. A castle is deemed under attack whenever enemy players manages to deal damage to any wall or door using explosives or siege golems.",
  },
]);

// AnnounceSiegeWeaponSpawn
createFieldSetAsBoolean("AnnounceSiegeWeaponSpawn", {
  value: true,
  desc: "If enabled, players will be notified when a siege weapon is spawned.",
});

// ShowSiegeWeaponMapIcon
createFieldSetAsBoolean("ShowSiegeWeaponMapIcon", {
  value: true,
  desc: "If enabled, players will be able to see the map icon for siege weapons.",
});

// PlayStyleModifiers
createFieldSetMultiInput("PlayStyleModifiers", [
  {
    id: "BuildCostModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the cost of building structures.",
  },
  {
    id: "RecipeCostModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the cost of crafting recipes.",
  },
  {
    id: "CraftRateModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the rate of crafting recipes.",
  },
  {
    id: "ResearchCostModifier",
    value: 1,
    type: "number",
    disabled: true,
    desc: "Multiplies the cost of researching technologies.",
  },
  {
    id: "ResearchTimeModifier",
    value: 1,
    type: "number",
    disabled: true,
    desc: "Multiplies the time of researching technologies.",
  },
  {
    id: "RefinementCostModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the cost of refining items.",
  },
  {
    id: "RefinementRateModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the rate of refining items.",
  },
  {
    id: "DismantleResourceModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the amount of resources returned when dismantling structures.",
  },
  {
    id: "ServantConvertRateModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the rate of converting servants.",
  },
  {
    id: "RepairCostModifier",
    value: 1,
    type: "number",
    desc: "Multiplies the cost of repairing structures.",
  },
]);

// Death_DurabilityFactorLoss
createFieldSetSingleInput("Death_DurabilityFactorLoss", {
  value: 0,
  type: "number",
  desc: "The amount of durability loss that equipment suffer upon death when defeated in PvP. Players are deemed as in PvP for a duration after dealing damage to another player or receiving damage from another player.",
});

// Death_DurabilityLossFactorAsResources
createFieldSetSingleInput("Death_DurabilityLossFactorAsResources", {
  value: 1,
  type: "number",
  desc: "Durability loss suffered upon death is dropped as materials. This value defines the amount of materials that are either lost or dropped. A value of 0 results in all materials being lost while a value of 1 results in all materials being dropped.",
});
