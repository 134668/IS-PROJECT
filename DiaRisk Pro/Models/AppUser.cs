using Microsoft.AspNetCore.Identity;

namespace DiaRisk_Pro.Models
{
    public class AppUser: IdentityUser
    {
        public string? FirstName { get; set; }
        public virtual ICollection<AppUserRole> AppUserRoles { get; set; }
        public string? LastName { get; set; }

        public string? LicenseNo { get; set; }
        public string? Created { get; set; }
        public string? CreatedDate { get; set; }
    }
}
