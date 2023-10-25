namespace DiaRisk_Pro.Models
{
    public class Patient
    {
        public required string Id { get; set; }
        public string? BirthCertNo { get; set; }
        public string? IDNumber { get; set; }
        public required string PatientNo { get; set; }
        public required string Name { get; set; }
        public int? Age { get; set; }
        public required string DOB { get; set; }
        public required string Created { get; set; }
        public required string CreatedBy { get; set; }

    }
}
