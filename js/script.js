document.getElementById('configForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recolectar los valores del formulario
    const formData = new FormData(event.target);
    const config = {
        roundTime: formData.get('roundTime'),
        scoreLimit: formData.get('scoreLimit'),
        playerLimit: formData.get('playerLimit'),
        gameMode: formData.get('gameMode'),
        friendlyFire: formData.get('friendlyFire') ? "1" : "0", // Checkbox
        hostname: formData.get('hostname'),
        rconPassword: formData.get('rconPassword'),
        svPassword: formData.get('svPassword'),
        mpDamageHeadshotOnly: formData.get('mpDamageHeadshotOnly') ? "1" : "0",
        randomRespawn: formData.get('randomRespawn') ? "1" : "0", // Checkbox
        freezeTime: formData.get('freezeTime'),
        cheats: formData.get('cheats') ? "1" : "0",
         // Checkbox
    };

    // Generar las líneas de configuración
    const configLines = [
        `sv_lan 0`,
        `sv_maxrate 0`, // Esto se manejará según el valor seleccionado
        `sv_minrate 0`, // Esto se manejará según el valor seleccionado
        `sv_maxupdaterate 0`, // Esto se manejará según el valor seleccionado
        `sv_minupdaterate 0`, // Esto se manejará según el valor seleccionado
        `sv_mincmdrate 0`, // Esto se manejará según el valor seleccionado
        `sv_maxcmdrate 0`, // Esto se manejará según el valor seleccionado
        `sv_parallel_sendsnapshot 1`, // Esto se manejará según el valor seleccionado
        `sv_clockcorrection_msecs 15`, // Esto se manejará según el valor seleccionado
        `sv_hibernate_when_empty 0`, // Esto se manejará según el valor seleccionado
        `mp_roundtime ${config.roundTime}`,
        `mp_maxrounds ${config.scoreLimit}`,
        `mp_maxplayers ${config.playerLimit}`,
        `game_mode ${config.gameMode}`, // Esto se manejará según el valor seleccionado
        `mp_friendlyfire ${config.friendlyFire}`,
        `hostname "${config.hostname}"`,
        `rcon_password "${config.rconPassword}"`,
        `sv_password "${config.svPassword}"`,
        `mp_damage_headshot_only ${config.mpDamageHeadshotOnly}`,
        `mp_startmoney ${formData.get('startMoney')}`,
        `mp_buytime ${formData.get('buyTime')}`,
        `mp_buy_anywhere ${formData.get('buyAnywhere') ? "1" : "0"}`,
        `mp_respawn_on_death_ct ${config.randomRespawn}`,
        `mp_respawn_on_death_t ${config.randomRespawn}`,
        `mp_respawnwavetime_ct ${formData.get('respawnWaveTimeCT')}`,
        `mp_respawnwavetime_t ${formData.get('respawnWaveTimeT')}`,
        `mp_freezetime ${config.freezeTime}`,
        
        `sv_cheats ${config.cheats}`,

        

        // Agrega más configuraciones según sea necesario
    ];

    // Crear y descargar el archivo CFG
    const blob = new Blob([configLines.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'server.cfg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
