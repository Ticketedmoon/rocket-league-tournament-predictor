using System.Text.Json.Serialization;

namespace RocketLeagueTournamentPredictor.Server.Domain
{
    public class PlayerData
    {
        [JsonPropertyName("id")]
        public required int Id {  get; set; }

        [JsonPropertyName("name")]
        public required string Name { get; set; }

        [JsonPropertyName("tournament_placements")]
        public required List<TournamentPlacement> TournamentPlacements { get; set; }
    }

    public class TournamentPlacement
    {
        [JsonPropertyName("name")]
        public required string Name { get; set; }

        [JsonPropertyName("tournament_tier")]
        public required Single TournamentTier {  get; set; }

        [JsonPropertyName("placement")]
        public required Single Placement {  get; set; }
    }
}
