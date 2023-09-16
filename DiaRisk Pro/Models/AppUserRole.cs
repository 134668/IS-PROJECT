using Microsoft.AspNetCore.Identity;

namespace DiaRisk_Pro.Models
{
    public class AppUserRole :IdentityRole
    {
        public string Description { get; set; }
    }
}
