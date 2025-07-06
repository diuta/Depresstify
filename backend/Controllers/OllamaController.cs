using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OllamaController : ControllerBase
    {
        private readonly OllamaService _ollamaService;
        public OllamaController(OllamaService ollamaService)
        {
            _ollamaService = ollamaService;
        }

        [HttpPost("chat")]
        [Authorize]
        public async Task<IActionResult> Chat([FromBody] OllamaChatRequest req)
        {
            if (string.IsNullOrWhiteSpace(req.Prompt))
                return BadRequest(new { error = "Prompt is required." });
            var response = await _ollamaService.GetChatCompletionAsync(req.Prompt);
            return Ok(new { response });
        }
    }
} 