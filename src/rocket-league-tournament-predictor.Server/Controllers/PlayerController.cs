using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using RocketLeagueTournamentPredictor.Server.Domain;

namespace RocketLeagueTournamentPredictor.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlayerController : ControllerBase
    {
        private readonly string _filePath = "./Properties/PlayerData/player_tournament_history.json";

        private readonly ILogger<PlayerController> _logger;

        private readonly List<PlayerData> _players;

        public PlayerController(ILogger<PlayerController> logger)
        {
            _logger = logger;

            string jsonContent = System.IO.File.ReadAllText(_filePath);

            _players = JsonSerializer.Deserialize<List<PlayerData>>(jsonContent);
        }

        [HttpGet(Name = "GetPlayerData")]
        public IEnumerable<PlayerData> Get()
        {
            return _players;
        }
    }
}
