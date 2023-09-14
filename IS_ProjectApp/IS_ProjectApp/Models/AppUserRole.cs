using Microsoft.AspNetCore.Identity;

namespace IS_ProjectApp.Models
{
    public class AppUserRole: IdentityRole
    {
        public string Description { get; set; }
    }
}
