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
    public class PatientsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public PatientsController(ApplicationDbContext context, UserManager<AppUser> userManager
            ,RoleManager<AppUserRole> roleManager
            )
        {
            _context = context;
        }

        [HttpGet]
        // GET: Bills
        public async Task<IActionResult> Index()
        {
            var patients = await _context.Patients.OrderByDescending(c => c.PatientNo).ToListAsync();
            return View(patients);
        }

        public IActionResult create()
        {
            return View();
        }
        public async Task<IActionResult> edit(string id)
        {
            var getpatient = await _context.Patients.FirstOrDefaultAsync(c => c.Id == id);
            if(getpatient == null)
            {
                return NotFound();
            }
            ViewBag.name = getpatient.Name;
            ViewBag.dob = getpatient.DOB;
            ViewBag.idno = getpatient.IDNumber;
            ViewBag.cert = getpatient.BirthCertNo;
            ViewBag.id = id;
            return View();
        }
        [HttpPost]
        // GET: Bills
        public async Task<IActionResult> patientcreate(string name, string cert, string idno, string dob)
        {
            var patients = await _context.Patients.FirstOrDefaultAsync(c => (c.BirthCertNo == cert || c.IDNumber == idno));
            if(patients == null)
            {
                Guid auditt = Guid.NewGuid();
                var audittid = auditt;
                Patient patient = new Patient
                {
                Id = audittid.ToString(),
                PatientNo = "P-" + (_context.Patients.ToList().Count + 1).ToString().PadLeft(6, '0'),
                Name = name.ToUpper(),
                BirthCertNo = cert,
                IDNumber = idno,
                DOB = dob,
                CreatedBy = "SuperAdmin",
                Created = DateTime.UtcNow.AddHours(3).ToString("dd/MMM/yyyy HH:mm"),
                Age = 0,
            };
                
;                _context.Add(patient);
                await _context.SaveChangesAsync();

                TempData["success"] = "Success";
                return RedirectToAction("index", "Patients");
            }
            else
            {
                TempData["Error"] = "Patient Exists";
                return RedirectToAction("index", "Patients");
            }
        }

        [HttpPost]
        // GET: Bills
        public async Task<IActionResult> patientedit(string id, string name, string cert, string idno, string dob)
        {
            var patients = await _context.Patients.FindAsync(id);
            patients.Name = name.ToUpper();
            patients.BirthCertNo = cert;
            patients.IDNumber = idno;
            patients.DOB = dob;
            _context.Update(patients);
                await _context.SaveChangesAsync();

                TempData["success"] = "Success";
                return RedirectToAction("index", "Patients");
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}