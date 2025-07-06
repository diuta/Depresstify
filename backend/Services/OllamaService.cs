using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using backend.Models;

namespace backend.Services
{
    public class OllamaService
    {
        private readonly HttpClient _httpClient;
        private readonly OllamaOptions _options;
        private readonly AppDbContext _db;

        public OllamaService(HttpClient httpClient, IOptions<OllamaOptions> options, AppDbContext db)
        {
            _httpClient = httpClient;
            _options = options.Value;
            _db = db;
        }

        public async Task<string?> GetChatCompletionAsync(string prompt)
        {
            var requestBody = new
            {
                model = _options.Model,
                messages = new[]
                {
                    new { role = "user", content = prompt }
                }
            };

            var request = new HttpRequestMessage(HttpMethod.Post, _options.BaseUrl + "/api/chat")
            {
                Content = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json")
            };

            try
            {
                var response = await _httpClient.SendAsync(request);
                response.EnsureSuccessStatusCode();
                var json = await response.Content.ReadAsStringAsync();
                using var doc = JsonDocument.Parse(json);
                var content = doc.RootElement
                    .GetProperty("message")
                    .GetProperty("content")
                    .GetString();
                return content;
            }
            catch (HttpRequestException ex)
            {
                // Log or handle error as needed
                return $"Error: {ex.Message}";
            }
        }
    }
} 