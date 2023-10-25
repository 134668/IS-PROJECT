using DiaRisk_Pro.Data;
using DiaRisk_Pro.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Diagnostics.Metrics;
using System.Security.Claims;
using System.Text;

namespace DiaRisk_Pro.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;
        UserManager<AppUser> _userManager;
        RoleManager<AppUserRole> _roleManager;

        public HomeController(ApplicationDbContext context, UserManager<AppUser> userManager
            ,RoleManager<AppUserRole> roleManager
            )
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        [HttpGet]
        // GET: Bills
        public async Task<IActionResult> Index()
        {
            var userId = this.User.FindFirstValue(ClaimTypes.NameIdentifier);

            var checkadmin = await _context.AppUsers.FirstOrDefaultAsync(c => c.Email == "admin@diariskpro.com");
            if (checkadmin == null)
            {
                AppUser emaskaniUser = new AppUser
                {
                    UserName = "admin@diariskpro.com",
                    Email = "admin@diariskpro.com",
                    FirstName = "Super",
                    LastName = "Admin",
                    EmailConfirmed = true,

                };
                var password = "SUperadmin@2023";
                var result = await _userManager.CreateAsync(emaskaniUser, password);

                if (result.Succeeded)
                {
                    var field = "SuperAdmin";
                    var newRole = new AppUserRole();
                    newRole.Name = field;
                    _roleManager.CreateAsync(newRole).GetAwaiter().GetResult();

                    var subscriberRole = await _userManager.AddToRoleAsync(emaskaniUser, "SuperAdmin");
                }
            }

            var userrr = await _userManager.FindByIdAsync(userId);
            var checkagentbroker = await _userManager.IsInRoleAsync(userrr, "SuperAdmin");
            if (checkagentbroker == true)
            {
                return RedirectToAction("index", "Patients");
            }

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}