function cekStres() {
        // Mengambil jawaban dari pengguna via prompt
            let q1 = confirm("Apakah Anda sering merasa lelah luar biasa sebelum mulai bekerja di pagi hari?");
                let q2 = confirm("Apakah Anda merasa sinis atau negatif terhadap pekerjaan Anda akhir-akhir ini?");
                    let q3 = confirm("Apakah Anda merasa produktivitas kerja Anda menurun drastis?");

                        // Menghitung skor berdasarkan jawaban 'Ya' (OK)
                            let skor = 0;
                                if (q1) skor++;
                                    if (q2) skor++;
                                        if (q3) skor++;

                                            // Menampilkan hasil berdasarkan skor
                                                if (skor === 0) {
                                                        alert("Skor Anda: 0/3\nKondisi Anda Bagus! Tingkat stres Anda rendah dan stabil.");
                                                            } else if (skor === 1 || skor === 2) {
                                                                    alert("Skor Anda: " + skor + "/3\nWaspada Burnout Ringan! Cobalah ambil jeda istirahat sejenak dan atur waktu tidur.");
                                                                        } else if (skor === 3) {
                                                                                alert("Skor Anda: 3/3\nSinyal Bahaya (Burnout Total)! Kesehatan mental Anda terganggu. Pertimbangkan untuk berkonsultasi atau mengambil cuti medis.");
                                                                                    }
                                                                                    }
                                                                                    
}
