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
using System.Data;
using System.Diagnostics;
using System.Diagnostics.Metrics;
using System.Text;

namespace DiaRisk_Pro.Controllers
{
    [Authorize(Roles = "SuperAdmin")]
    public class DoctorsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DoctorsController(ApplicationDbContext context, UserManager<AppUser> userManager
            ,RoleManager<AppUserRole> roleManager
            )
        {
            _context = context;
        }

        [HttpGet]
        // GET: Bills
        public async Task<IActionResult> Index()
        {
            var doctors = await _context.AppUsers.Where(c => c.Email != "admin@diariskpro.com").OrderByDescending(c => c.FirstName).ToListAsync();
            return View(doctors);
        }

        public async Task<IActionResult> edit(string id)
        {
            var getpatient = await _context.AppUsers.FirstOrDefaultAsync(c => c.Id == id);
            if(getpatient == null)
            {
                return NotFound();
            }
            ViewBag.fname = getpatient.FirstName;
            ViewBag.lname = getpatient.LastName;
            ViewBag.license = getpatient.LicenseNo;
            ViewBag.phone = getpatient.PhoneNumber;
            ViewBag.id = id;
            return View();
        }
        
        [HttpPost]
        // GET: Bills
        public async Task<IActionResult> doctoredit(string id, string fname, string lname, string license, string phone)
        {
            var patients = await _context.AppUsers.FindAsync(id);
            patients.FirstName = fname;
            patients.LastName = lname;
            patients.LicenseNo = license;
            patients.PhoneNumber = phone;
            _context.Update(patients);
                await _context.SaveChangesAsync();

            var smsJsonPost = new JObject
                                            {
                                                { "api_key", "5fae8de671e67" },
                                                { "username", "maskani" },
                                                { "sender_id", "UNICOMM" },
                        { "message", "Dear "+fname+", Your Details at Diarisk have been edited by super admin" },
                        { "phone", patients.PhoneNumber }
                    };

            var smsData = smsJsonPost;
            var smsEndPointUrl = "http://bulksms.mobitechtechnologies.com/api/sendsms";
            var smsResponse = SendPostRequest(smsData, smsEndPointUrl);

            TempData["success"] = "Success";
                return RedirectToAction("index", "Doctors");
        }

        public static async Task<string> SendPostRequest(JObject data, string url)
        {

            string myJson = data.ToString();
            string smsPostResponse = "";
            using (var client = new HttpClient())
            {
                var response = await client.PostAsync(
                    url,
                     new StringContent(myJson, Encoding.UTF8, "application/json"));
                smsPostResponse = response.StatusCode.ToString();
            }

            return smsPostResponse;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}